# Notes - Serving Static Files (and Middleware)

_Code from part 27 used_

We need a way to deal with requests for files such as stylesheet files or image files. Middleware can be used for this.

Middleware is code that runs between the request and the response. In this tutorial, middleware that is included with the express package is used.

1. Use the ```app.use()``` method to set up the middleware.
    ```javascript
    app.use('/assets', function(req, res, next) {

    });
    ```
    If the method is provided with parameters it will attach the middleware to a route so that if a request is made the middleware will run.
2. The ```next``` parameter is used when the middleware has finished running so that it knows to move on to the next bit of middleware if there are multiple that match a certian route.
3. In the body of the function:
    ```javascript
    app.use('/assets', function(res, req, next){
        console.log(req.url);
        next();
    });
    ```
4. If the ```next()``` function isn't used the app could potentially break.
5. Run the app and navigate to ```localhost:3000/assets```. Notice in the console that ```/``` is being output. This is refering to what comes after the ```assets/``` in the URL.
6. Type in ```/styles.css``` after ```assets``` and notice the console now logs ```/styles.css```.
7. This is all coming from the middleware set up above.
8. Try to request the index page and notice that nothing gets logged to the console.
9. Express includes middleware that will do this for us.
10. Use:
    ```javascript
    app.use('/assets', express.static('assets'));
    ```
    This will map any requests for ```/assets``` in the URL to the corresponding folder on the server referenced in the ```express.static()``` parameters. This means the folder and URL do not need to be named the same thing.
11. The ```assets``` folder is normally called ```public```