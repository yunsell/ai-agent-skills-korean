import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import zlib from "node:zlib";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";

// Offline extraction only. This script never connects to a browser.
// Use a single-page recording. Review excerpts and every frame before sharing;
// selecting metric events is not a privacy filter or an anonymization guarantee.
const input = process.argv[2];
if (!input) throw new Error("Usage: node scripts/extract-trace-evidence.mjs TRACE.json[.gz] [--video OUTPUT.mp4]");
const bytes = fs.readFileSync(input);
const trace = JSON.parse((input.endsWith(".gz") ? zlib.gunzipSync(bytes) : bytes).toString());
const events = trace.traceEvents;
if (!Array.isArray(events)) throw new Error("Expected a Chrome traceEvents array.");
const navigation = events.filter(event => event.name === "navigationStart"
  && event.args?.data?.isOutermostMainFrame && event.args.data.documentLoaderURL).at(-1);
if (!navigation) throw new Error("No top-level navigation found.");
const frame = navigation.args.frame;
const scoped = events.filter(event => event.ts >= navigation.ts
  && (event.args?.frame || event.args?.data?.frame) === frame);
const lcp = scoped.filter(event => event.name === "largestContentfulPaint::Candidate");
const timing = scoped.filter(event => event.name === "EventTiming" && event.args?.data?.interactionId);
const shifts = scoped.filter(event => event.name === "LayoutShift");
const screenshots = events.filter(event => event.name === "Screenshot" && event.ts >= navigation.ts);
const selected = new Set([navigation, ...lcp, ...timing, ...shifts]);
const result = {
  format: "Agent Stack Brief / metric-event excerpt v1",
  scope: "Selected main-frame metric events; not a complete importable performance trace.",
  source: {
    tool: trace.metadata?.source,
    recordedAt: trace.metadata?.startTime,
    archiveSha256: crypto.createHash("sha256").update(bytes).digest("hex"),
    page: navigation.args.data.documentLoaderURL,
    totalEvents: events.length,
  },
  observations: {
    finalLcpCandidateMs: lcp.length ? (lcp.at(-1).ts - navigation.ts) / 1000 : null,
    finalLcpCandidateType: lcp.at(-1)?.args.data.type,
    maxObservedInteractionEventMs: timing.length ? Math.max(...timing.map(event => event.args.data.duration)) : null,
    interactionCount: new Set(timing.map(event => event.args.data.interactionId)).size,
    layoutShiftCount: shifts.length,
    shiftsWithRecentInput: shifts.filter(event => event.args.data.had_recent_input).length,
    screenshotFrameCount: screenshots.length,
  },
  events: events.filter(event => selected.has(event)),
  filmstrip: {
    method: "Performance screenshot frames with original timing; not an MCP screencast.",
    frames: screenshots.length,
    frameSpanSeconds: screenshots.length ? (screenshots.at(-1).ts - screenshots[0].ts) / 1e6 : null,
  },
};

const videoIndex = process.argv.indexOf("--video");
if (videoIndex >= 0) {
  const output = process.argv[videoIndex + 1];
  if (!output || !output.endsWith(".mp4")) throw new Error("Provide an MP4 output path.");
  if (fs.existsSync(output)) throw new Error("Video already exists: " + output);
  if (!screenshots.length) throw new Error("No screenshot frames available.");
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), "brief-filmstrip-"));
  const entries = [];
  screenshots.forEach((event, index) => {
    const file = path.join(directory, String(index).padStart(5, "0") + ".jpg");
    fs.writeFileSync(file, Buffer.from(event.args.snapshot, "base64"));
    entries.push("file '" + file + "'");
    const next = screenshots[index + 1];
    entries.push("duration " + (next ? (next.ts - event.ts) / 1e6 : 0.1));
  });
  entries.push(entries.at(-2));
  const list = path.join(directory, "frames.txt");
  fs.writeFileSync(list, entries.join("\n") + "\n");
  fs.mkdirSync(path.dirname(output), { recursive: true });
  execFileSync("ffmpeg", ["-hide_banner", "-loglevel", "error", "-f", "concat", "-safe", "0",
    "-i", list, "-vf", "scale=1024:-2", "-c:v", "libx264", "-pix_fmt", "yuv420p",
    "-movflags", "+faststart", "-fps_mode", "vfr", output]);
}
process.stdout.write(JSON.stringify(result, null, 2) + "\n");
