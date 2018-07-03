# Notes - POST requests

_Code from part 29 is used._


- POST is a request method.  
- Asking the server to accept/store data that is enclosed in the body of a request.
- Forms use POST requests.
- Not using data in a query string.

1. In the contact form the method used is POST and the action is set to '/contact'.
2. The POST request needs to be handled in the routes file.
3. Instead of using the 'req' object to parse query string data we need to use middleware to handle the parsing of POST data.
4. Install 'body-parser; middleware to the project
5. Create a var and store the new middleware in it as a shortcut to access its functions.
6. Add an 'app.post()' command to fire when a post request is made to the given route.
7. Use the middleware var as a parameter.
```Javascript
app.post('/contact', urlencodedParser, function (req, res) {
    console.log(req.body);
    // qs means querystring
    res.render('contact-success', {data: req.body});
});
```
8. Create a new view called 'contact-success.ejs'. This is where the posted data will be displayed.
9. The data recieved from the post request is stored in the 'data' object and is accessed using the request object; 'req.body'.
10. This will allow access to the data in the 'contact-success' view.
11. Output the data using the express template tags:
```HTML
<%= data.who, data.department, data.email %>
```