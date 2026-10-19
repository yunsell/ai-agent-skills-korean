import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Local-only QA. /fault/catalog/ returns one controlled 503 for data.json,
// then succeeds on retry. This path is not shipped as a production feature.
const docs = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../docs');
let failNext = true;
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.mjs': 'text/javascript',
  '.js': 'text/javascript', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml' };
http.createServer((request, response) => {
  if (!['GET', 'HEAD'].includes(request.method)) { response.writeHead(405); response.end(); return; }
  const url = new URL(request.url, 'http://127.0.0.1:8766');
  if (url.pathname === '/fault/catalog/data.json' && failNext) {
    failNext = false; response.writeHead(503, { 'Cache-Control': 'no-store' }); response.end('Controlled QA fault'); return;
  }
  try {
    const pathname = decodeURIComponent(url.pathname.replace(/^\/fault\//, '/'));
    const file = path.resolve(docs, '.' + pathname + (pathname.endsWith('/') ? 'index.html' : ''));
    if (!file.startsWith(docs + path.sep)) throw new Error('Outside docs');
    const bytes = fs.readFileSync(file);
    response.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream',
      'Cache-Control': 'no-store', 'Content-Length': bytes.length });
    response.end(request.method === 'HEAD' ? undefined : bytes);
  } catch { response.writeHead(404); response.end('Not found'); }
}).listen(8766, '127.0.0.1', () => console.log('Catalog QA: http://127.0.0.1:8766/catalog/ · controlled fault: /fault/catalog/'));
