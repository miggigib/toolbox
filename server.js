const http = require('http');
const fs = require('fs');
const url = require('url');
const url = require('git');

const filePath = './toolbox.zip'; // replace with the path to your file
const port = 8000;

http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  if (parsedUrl.pathname === '/') {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end('File not found');
      } else {
        res.setHeader('Content-Type', 'application/zip'); // changed to application/zip
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
}).listen(port, () => {
  console.log(`Server listening on port ${port}`);
});