# Notes - Serving JSON Data

_Some code from part 17 is reused._

Streams will not be used to send the JSON data. Instead it will be sent directly to the response object by using the end() method.

1. Set content type that will be received to 'application/json'
2. Create a json object.
    ```javascript
    myObj = {some: data};
    ```
3. To send this back to the client the ```res.end()``` method is used.
4. However, the json object can't just be added to the ```end()``` method as it expects either a string or a buffer, not an object.
5. To send a json object it has to be converted to a string.
6. This is done using the ```JSON.stringify()``` method.
    ```javascript
    JSON.stringify(myObj);
    ```
7. Run this code and check in the network tab of chrome that the proper content-type is being returned in the headers.

This is useful as some javascript may request the JSON data and it will be returned in this way so the the javascript can then use it.