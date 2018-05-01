# Notes - Query Strings

A query string is additional data added on to a http request in the form of name-value pairs.
To construct a name-value pair a question mark is added to the end of a URL and followed by the name-value pair which can be seperated by ampersands if there are more than one.

*Example:*
mysite.com/blog/news?page=2
The ```?``` indicates the start of the query.

mysite.com/contact?person=ryu&dept=marketing
The ```&``` seperates two different name-value pairs.

1. When express is used the request object can parse the query string for us.
    ```javascript
    console.log(req.query());
    ```
    This will output an object with the provided query string.
    This method is put in the ```app.get()``` function.
2. To do something with this data like pass it to the view for example it should be passed to an object in the render method.
    ```javascript
    res.render('contact', {qs: req.query});
    ```
3. To get this to show on the webpage you need to modify the template.
4. In the ```contact.ejs``` file add another ```<p>``` tag and use the template syntax to output the contents of the ```qs``` object.
    ```
    <p> <%= qs.dept %>
    ```
    The query string outputs an object containing the data it was given in the URL so thats why we are refering to ```qs.dept``` here.
5. Run the app and navigate to ```localhost:3000/contact?dept=marketing&person=joe``` to see the ```dept``` value output to the view.
6. This can be done with the ```person``` query string as well.
7. Add a form to the contact file. (Refer to contact.ejs)
8. The fields in the form will be pre-populated with the data given in the query string.
9. Add a value tag to the form with the ejs tags referencing the ```qs``` object and the data that is relevant to that field.