# Notes - Pipes

_Some code from part 15 is reused. Server code from part 12 is reused._

Normally when reading and writing to streams we listen for a chunk of data being received and then manually pass this to a write stream to send it somewhere else.

Pipes automate this process.

Read and write streams still need to be created.

1. Use ```pipe()``` method on the readable stream. This method can only be used on readable streams as data is being piped from a readable stream to a writable stream.
2. Add the writable stream as a parameter.
3. This method is doing exactally the same thing that the code in part 15 was doing.

Using pipes with a server to send data to a client.
1. In the server tutorial, plain text content was returned to the client through the ```end()``` method of the response object (res).
2. To send the contents of a file to the client the file is read using a readstream and then piped to the response object.
3. Place the code for read and write streams in the server code.
4. Delete the write stream code.
5. Pipe data to the response object.
    ```javascript
    myReadStream.pipe(res);
    ```

I also attempted to send data to the client with the ```readFile()``` method to see which was faster and after some test they both turned out to be very similar with the ```readFile()``` method being only slightly faster.