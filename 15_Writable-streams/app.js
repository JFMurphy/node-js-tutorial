var http = require('http');
var fs = require('fs');

console.log('got here');
var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

myReadStream.on('data', function(chunk) {
    console.log('New chunk received.');
    myWriteStream.write(chunk);
});