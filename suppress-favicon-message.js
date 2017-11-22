// early experiments with node had mysterious double requests
// turned out these were for the stoopid favicon
// here's how to short-circuit those requests
// and stop seeing 404 errors in your client console

var http = require('http');

http.createServer(function (q, r) {

    // control for favicon

    if (q.url === '/favicon.ico') {
        r.writeHead(200, { 'Content-Type': 'image/x-icon' });
        r.end();
        console.log('favicon requested');
        return;
    }

    // not the favicon? say hai
    console.log('hello');
    r.writeHead(200, { 'Content-Type': 'text/plain' });
    r.write('Hello, world!');
    r.end();

}).listen(8000);

console.log('Server running at http://127.0.0.1:8000/');