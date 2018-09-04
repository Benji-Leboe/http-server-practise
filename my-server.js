const http = require('http');
const port = 8080;

function requestHandler(req, res){
  if(req.url === '/'){
    res.end('Welcome to the homepage!');
  }else if(req.url === '/urls'){
    res.end('www.lighthouselabs.ca\nwww.google.ca');
  }else{
    res.statusCode = 404;
    res.end('Invalid path');
  }
}

let server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`);
});