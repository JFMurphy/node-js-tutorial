# Notes - Templating Engines

_Code adapted from part 24 used. 'index' and 'contact' HTML files also used._

1. Currently the code is only sending back strings to the client.
2. To send a html page use the ```sendFile()``` method of the response object instead of the ```send()``` method.
    ```javascript
    res.sendFile(___dirname + '/index.html')
    ```
3. To inject dynamic content into a page, like from a database for example, a templating engine is used.
4. In this code when a user navigates to 'profile/123' they will get the message, but we want to dynamically add this to a HTML file which is then returned to the client.
5. The template engine used in this tutorial is ejs.
6. To install:
    ```
    npm install ejs -save
    ```
7. Tell express to use ejs as the view engine.
    7.1. Use ```app``` variable to call the ```set()``` method with the following params.
    ```javascript
    app.set('view engine', 'ejs');
    ```
8. The engine will look in the 'views' folder when views are requested.
9. Create a 'views' folder.
10. Create a file called 'profile.ejs' within this folder.
11. The ```sendFile()``` isn't used to send the profile page to the user. Instead, a method called ```render()``` is used.
12. The full path name is not needed as the engine always looks in the views folder.
13. Pass through the name of the view like so:
    ```javascript
    app.get('/profile/:id', function(res, req){
        res.render('profile');
    });
14. Run app to check this works.
15. To pass data to a view we have to pass an object to the ```render()``` method as a second parameter.
16. Enter properties in the object which contain data.
17. Enter 'person' as the first property with the id parameter of the URL as the data.
    ```javascript
    res.render('profile', {person: req.params.id})
    ```
18. This data can be accessed in the profile view through the 'person' property.
19. In the ejs file the data is output like so:
    ```html
    <h1>This is the profile of <%= person%></h1>
    ```
20. To insert more data, create an object variable and insert some data into it.
    ```javascript
    var data = {name: 'john', age: 23, job:'unknown'}
    ```
21. Make another property in the object of the ```render()``` method called data and set it to the data variable made in step 20.
    ```javascript
    res.render('profile', {person: req.params.id, data: data});
    ```
22. Output the data to the view. (Refer to profile.ejs.)
23. Run app to check.

_Video tutorial part 26 from this point on_

24. Add more properties to the data object as an array. (Refer to app.js code for example.)
25. This data is going to be iterated on and added dynamically to the HTML page.
26. Start a list in the template file.
27. To embed javascript use '<% %>' and insert the JS between the symbols.
28. Insert a ```forEach()``` function that iterates thorugh the array added in step 24.
    ```javascript
    data.hobbies.forEach(function(item){
        <li><%= item %></li>
    });
    ```
29. Insert a ```<li>``` tag in the fucntion that contains the ```item``` declared as a parameter in the function. Remember to close the template symbols when not writing javascript anymore.
30. 