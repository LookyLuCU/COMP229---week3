//import http web server nodejs core package
const http = require('http');

//create the webserver event handler
const server = http.createServer((req, res) => {

console.log(req);

    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end('<h1>Hello World</h1>');
});

server.listen(3000);

console.log('Server running at http://localhost:3000');