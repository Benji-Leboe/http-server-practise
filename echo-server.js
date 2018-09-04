const http = require('http');

http.createServer((req, res) => {
  let body = [];
  req.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    res.end(body);
  });
}).listen(8080);