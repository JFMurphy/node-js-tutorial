var fs = require('fs');

/*// Synchronous 
var readMe = fs.readFileSync('readme.txt', 'UTF8');
fs.writeFileSync('writeme.txt', readMe); */

// Asynchronous
fs.readFile('readme.txt', 'UTF8', function(err, data){
    fs.writeFile('writeme.txt', data);
});

console.log("test");