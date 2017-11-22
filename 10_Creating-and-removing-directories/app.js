var fs = require('fs');

// Deleting a file
// fs.unlink("writeme.txt");

// Making a directory synchronously
// fs.mkdirSync('newdir');
// Deleting a directory
// fs.rmdirSync('newdir');

// Asynchronous operations

// Creating a new directory and reading from a file
/* fs.mkdir('stuff', function() {
    fs.readFile('readme.txt', 'utf8', function(err, data){
        fs.writeFile('./stuff/writeme.txt', data);
    });
}); */

// Deleting the previously created directory.
fs.unlink('./stuff/writeme.txt', function(){
    fs.rmdir('stuff');
});
