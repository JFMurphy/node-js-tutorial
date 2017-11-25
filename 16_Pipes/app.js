var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    console.log('Request was made: ' + req.url);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
    myReadStream.pipe(res);

    // Sending the contents of a file using readFile()
    /* fs.readFile('readme.txt', 'utf8', function(err, data) {
        res.end(data);
    }); */
});

server.listen(3000, 'localhost');
console.log('Listening on port 3000');