# Notes - Reading and Writing Files

1. Require NodeJS file system 'fs'
    ```javascript
    require('fs')
    ```
2. Reading a file:
- 2.1. Create a new file and put some content in it.
- 2.2. Use `fs.readFileSync()`
    - 2.2.1. 'readFileSync' is a synchronous method meaning it will complete this operation before executing any other code.  
- 2.3. Pass through location of file to read as a pararmeter and the character encoding of the file.  
    ```javascript
    fs.readFileSync('file.txt', 'utf8')
    ```
- 2.4. Store all this in variable.  
    ```javascript
    var contents = fs.readFileSync();`
    ```
3. Writing a file
- 3.1. Read in contents of *readme.txt* and output it to a new file created by node file system
- 3.2. Use `fs.writeFileSync('newfile.txt', *data to write to file*);`
    ```javascript
    var readMe = fs.readFileSync()
    fs.writeFileSync('writeme.txt', readMe);
    ```
4. File has been read and data stored in a variable. This data has then been passed into a new file created new the writeFileSync() method.
5. Asynchronous methods can also be used.
6. The method names are the same without the 'Sync' part.
7. They also require three parameters now. The first two are the same and the third is a callback function that fires when the method has completed executing.
8. This callback function takes two params. An error param and the data that is retrieved from the file being read.
9. While a file is being read other code can still be run because the method is asynchronous.
10. To test this add code after the the async method and it will be executed before the read operation.
    ```javascript
    readFile(...);
    console.log("test");
    ```
11. Next is to write to a file within the callback function of the `readFile()` method.
12. Within the callback function:
    ```javascript
    readFile(... function(err, data){
        writeFile('filetowriteto', data) (data is what is returned from the readfile and this is written to a new file.)
    });
    ```
13. Asynchronous code is quicker as code can be run in parallel.