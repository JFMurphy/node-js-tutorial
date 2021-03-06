# Notes - Basic Routing

_This tutorial reuses the html file from part 17._

In the previous server tutorials when running the server and accessing in on a browser it wouldn't matter what the url was it would always send back the data it was set up to send.  
For example if in the response end object the string 'Hello World!' was sent to the client this would be displayed no matter if the url was 'localhost:3000' or 'localhost:3000/api/stuff'.  
In this tutorial routing is set up so that different content is displayed depending on what the url requests.

The url property of the request object can be used to check what url the client is requesting and this can be used to determine what data to send.

1. In the server creation code add a check for what url is being requested.
    ```javascript
    if (req.url === '/home' || req.url === '/')
    ```
2. If the previous statement is true, then the ```index.html``` page should be sent to the client.
    ```javascript
    if (..) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    ```
3. The above code will write the necessary information to the headers and will then create a read stream that will read the index.html file and finally pipe it to the response object so that the client will receive it when they request the ```'/home'``` or ```'/'``` root url.
4. Running the code and checking in a browser will show that the index.html page is displayed.
5. Using any other url will result in the server endlessly trying to locate the request.
6. By adding more if statements different pages can be displayed depending on what the client requests.
    ```javascript
    else if(req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + 'contact/.html').pipe(res);
    } (be sure to create a contact.html file.)
    ```
7. Run the code and vist the ```'/contact'``` url
8. To route for JSON data and send that:  
    8.1. Set up a new route using another else if statement. (e.g '/api')  
    8.2. Create an array of JSON objects with some data.  
    ```jsonObj = [{some: data},{more:data}]```  
    8.3. Stringify the data and send to the ```res.end()``` method.
9. Whenever something that can't be handled is requested from the client the server will just timeout like before. To prevent this a catch-all is provided at the end of the if statements to produce a 404 page.
10. Change the status in the writeHead() method to 404 so the client knows the file cant be found on the server.
    ```javascript
    writeHead(404, ...)
    ```
11. Create a 404 html file.
12. Send the file as a response to the client as done previously.

A node package called express can be used to make routing a lot easier.