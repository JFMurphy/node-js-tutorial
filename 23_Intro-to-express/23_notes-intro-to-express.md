Notes - Introduction to Express

Easy and flexible routing system
Integrates with many templating engines
    - Makes it easier to develop frontends to applications.
Contains a middleware framework
    - Other Node package can extend the framework

1. Install express using npm
    > npm install express -save
2. Require the module in the code
    > var express = require('express')
3. Need to set up an express app in order to get access to all the functionality that express comes with.
    > var app = express();
4. The module.exports object in the express module returns a function. The function is fired when it is assigned to the 'app' variable and now all the express functionality is available on the 'app' var.
5. Start listening to a port. Express handles this automatically, the only thing that needs to be provided is a port number.
    > app.listen(3000);
6. The app variable has access to methods that can be used to responds to requests. These methods correspond to the type of request that is being made or HTTP verbs/methods.

HTTP Methods.
Each type of request contains information to specify which type of request it is.
The server looks for what type of request a particular request is and then treat it as such.
Express provides methods for dealing with the different types of requests. 
E.g app.get(), app.post(), app.delete()

7. To respond to a request:
    > app.get() (The parameters here are the route/url and a callback function that is fired when that url is visted by a client.)
8. In the callack function the response and request object need to be passed in as parameters.
    > app.get('/', function(req, res))
9. Send a string as the response when the server receives a request for the '/' url.
    > app.get(..., function(...) {
        res.send('string');
    });
10. There is no need to specify the Content-Type headers as express will work this out automatically.
11. Set up another route for the contact page and send another string.
12. Make sure the send() method is being called from the 'res' object