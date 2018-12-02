const http = require ('http');
const url = require ('url');

const server = http.createServer ((request, response) => {
  let requestUrl = url.parse (request.url, true);
  let path = requestUrl.pathname.replace (/^\/+|\/+$/g, '');
  if (request.method.toUpperCase () === 'POST' && path === 'hello') {
    response.setHeader ('Content-Type', 'application/json');
    response.end ('{"Welcome":"How are you?"}');
  } else {
    response.writeHead (404);
    response.end ();
  }
});

server.listen (8181);