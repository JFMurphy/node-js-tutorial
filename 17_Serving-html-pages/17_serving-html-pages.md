# Notes - Serving HTML Pages

_Reusing code from part 16_

1. Create a index.html file.
2. Add some boilerplate code to the html file.
3. Add some styles (Optional)
4. Change content type in the writeHead() method to type/html so the client knows it will be receiving a html file and will treat it as so.  
    ```Content-Type: text/html```
5. Change file to be read in the readStream object to the newly created html file.
6. Run