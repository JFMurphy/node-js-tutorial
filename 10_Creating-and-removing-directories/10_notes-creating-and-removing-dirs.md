# Notes - Creating and removing directories

Deleting a file

```javascript
fs.unlink(*file name*);
```
This will throw an error if it can't find the specified file so be sure to check that the file exists beforehand.

Creating Directories synchronously
```javascript
fs.mkdirSync(*directory name*);
```

Deleting directories
```javascript
rmdirSync();
```

**Asynchronous operations**  
Callback functions need to be used in this way to do something when the method has completed.

Reading contents from a file and putting it in a new file in a new directory.
1. Make a new directory: `mkdir()`
2. In the callback function read a file called readme.txt  
`readFile(err, data, callback)`
3. In the callback function of the read operation write a file to the new directory.
    - 3.1 When specifying which directory to write to you need to provide the current directory and then the new directory.
    ```javasricpt
    writeFile('./stuff/newfile.txt);
    ```


Delete the new directory
1. Can't delete a directory that has contents.
2. First of all remove all contents of the directory.  
    ```javascript
    fs.unlink(*file*, callback)
    ```
3. In the callback function perform the operation to delete the directory.
    ```javascript
    fs.rmdir(*directory to delete*)
    ```