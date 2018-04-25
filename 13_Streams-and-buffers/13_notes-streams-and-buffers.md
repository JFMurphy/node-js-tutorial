# Notes - Streams and Buffers

**Buffers**
Temporary storage for data that is being transfered from point A to point B.  
Once a buffer is filled it is passed on and the next one is filled.  
Moves big chunks of data bit by bit instead of waiting for a large amount to be transfered all at once.

**Streams**
A stream of data that flows over time from one place to another.  
Data is streamed from a data source into a buffer a small bit at a time. This buffer is then sent down the stream to the client.

*Example:* An online movie is streamed a bit at a time instead of having to wait for the whole movie to be loaded before it can be streamed.

Streams can be created in Node to read and write files which can increase the performance of the application as a result of the way streams work. Also applies to request and when sending data back to the client.