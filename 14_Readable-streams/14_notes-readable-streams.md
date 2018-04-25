# Notes - Readable Streams

**Writeable Streams**  
Allows NodeJS to send/write data to a Streams

**Readable Streams**  
Allows NodeJS to read data from a Streams

Duplex streams can do both

When sending a response to the client data is being sent. AKA a writable stream. The same applies when receiving a request or reading a file but in reverse i.e a readable stream.

The benefit with streams is that as data is being read it can be passed on to the client while the rest is being loaded.

Creating a read stream

1. Create a readme.txt and fill it with lorem ipsum
2. Use method createReadStream
    ```javascript
    myReadStream = fs.createReadStream()
    ```  
    2.1 As a param, pass through the path to the file to be read.  
        ```__dirname + '/readme.txt'```

3. This will create a read stream that will read the data a small bit at a time. It will fill up a buffer to pass it along in chunks.
4. We can recognise when we receive a piece of the stream.
5. This can be done as the readStream that was created inherits from the EventEmitter.
6. There is an event called data on the readStream that allows us to listen for when data is received.
7. Set up a listener to listen for receipt of data and then fire a function everytime something is received.  
    - 7.1. Adding a listener to the readStream  
        ```readStream.on('data', function(...){...});```  
        - 7.1.1. The data param here is the event to listen for and the function is a callback function that will be executed when the event fires.  
    - 7.2. Add chunk as a param to the callback function.  
        ```readStream.on('data', function(chunk){...})```  
        - 7.2.1. This chunk is the data that is received from the buffer.
8. Log to the console that a chunk has been received
9. Log the chunk itself to the console.
10. Running this code will return only the buffer not the text.
11. To return text the character encoding must be provided when creating the read stream.
    ```javascript
    fs.createReadStream(*path*, *encoding*); (For text, encoding should be utf8)
    ```
12. In comparison to previous tutorial when readFile() was used it grabbed the entire file an returned it instead of grabbing it in parts and returning those over time.