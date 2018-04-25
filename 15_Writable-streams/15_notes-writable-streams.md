# Notes - Writable Streams

_Code from part 14 used._

1. Create a new variable assign it to createWriteStream.
    ```javascript
    writeStream = fs.createWriteStream();
    ```
2.  Path of where data will be sent needs to be provided.
    ```javascript
    createWriteStream(__dirname + '/writeme.txt')
    ```
3. Everytime a chunk of data is received from the read stream the callback function is called and the data can be sent to a new location.
4. In the callback function call the write() function on the writeStream.
    4.1 As a param provide the chunk of data that has been received.
    ```javascript
    writeStream.write(chunk);
    ```

Using this method of reading and writing data clients are able to get the data quicker then if they had to wait for a whole file to be transfered.

As this is done so often there is a way to perform the operation of reading and writing data streams even quicker using pipes.