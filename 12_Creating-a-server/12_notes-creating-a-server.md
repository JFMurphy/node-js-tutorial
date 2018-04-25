Notes - Creating a Server

- Make a server  
- Make request to server  
- Deal with request in NodeJS

1. Make var named http and store the http module in it.
    ```javascript
    require('http')
    ```
2. Make a server variable and create a server.
    ```javascript
    server = http.createServer()
    ```
3. To deal with requests make the following additions to the line.
    ```javascript
    createServer(function(req, res));
    ```
4. The function takes two parameters. A request object and a response object.
5. When a request is received the function is called.
6. The req object is loaded with details about the request that has been made.
7. We can use the res object to send a response back to the client.

**Headers**  
- When the server respondes to the client it also sends headers along with data.
- Requests can also request headers.
- Headers are extra information about the request or the response.
- Things that can be contained in a header:
    - Content type:
        - Plaintext, HTML, JSON, etc
    - Status
        - 202 - Normal
        - 404 - Page not found

**Writing response headers**
1. ```res.writeHead(200, {'Content-Type': 'text/plain'});```  
    1.1. First param is the status.  
    1.2. Next is the content-type set to plaintext.
    
2. End the response and send to the browser.
    ```javascript
    res.end()
    ```
    2.1. Data can be sent back with this response.
        ```javascript
        res.end('Hello world')
        ```  
    2.2. Headers and the response body are being sent back to the client.
3. A port number needs to be specified to be able to respond to requests.
4. Start listening to a port  
    ```javascript
    server.listen(3000, 'localhost');
    ```
    4.1. First param is the port number  
    4.2. Second param is the localhost. This could be the ip address too.  
5. When a request is received the function to respond will be called.
6. When listening make sure to log a message to the console indicating that the port is active.
7. Navigate to 'localhost:3000' to see the response from the server.
8. Go to network tab in developer tools.
9. Responses and the headers are available here.
10. Look at status code and content-type and you will see they are the same as what was entered earlier.
11. Add a statement in the response to log the request that was made to the console.
    ```javascript
    log('request was made: ' + req.url)
    ```
    11.1. This will return which url the request was made from.