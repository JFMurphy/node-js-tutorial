# Making a Todo app

## Part 1

\public\assets folder downloaded from: https://github.com/iamshaunjp/node-js-playlist

1. Create ```package.json``` file and install dependencies:
    ```
    npm init
    ```

2. Install express and save as a dependency:
    ```
    npm install -save
    ```

3. Install ejs and save as a dependency.

4. Install body-parser and save.

## Part 2

1. Create app.js.

2. Require express.

3. Make the app an express app.
    ```js
    var app = express();
    ```

4. Set the template engine (ejs)

5. Map the public folder to be available when requested.
    ```js
    app.use(express.static('./public'));
    ```
    - This allows us to serve static files whenever the site is loaded. (when any url is requested.)

6. Set app to listen on a port.
    ```js
    app.listen(3000);
    //maybe log to console what port is being used.
    ```

7. Use a MVC architecture to structure the project.

8. Make a controller.
    - Make a 'controllers' folder.
    - Make controller file. todoController.js
    - Export a function that takes 'app' as a parameter
        ```javascript
        module.exports = function(app) {
            // set up request handlers.
        };
        ```
    - The 'app' parameter in the controller refers to 'app' variable in the app.js file which is set to ```express()```
    - Require the controller in the app.js file.
        ```js
        var todoController = require('./controllers/todoController')
        ```
    - Whatever is stored in the module.exports is now stored in the 'todoController' var. (A function)
    - Fire the todoController and pass through the 'app' var as a parameter.
        ```js
        todoController(app);
        ```
    
    9. Set up routes in the controller.
        - Handle get request
            ```js
            app.get('/todo', function(req, res) {
                /* render a view */
            });
            
            ```
        - Handle a post request
            ```js
            app.post('/todo', function(req, res) {
                /* add to list */
            });
            ```
        - Handle a deletion
            ```js
            app.delete('/todo', function(req, res) {
                /* Delete an item on the list */
            });
            ```

    10. Summary:
        - Set up app.js that starts the app.
        - Set up app using express
        - Set up view engine (ejs)
        - Set up static files.
        - Listened to port
        - Created controller to handle routes, views and passing data to views.
        - Required controller in app.js

## Part 3

1. Create view for home route.
    - \views\todo.ejs
    - Set up boilerplate html code
    - Require jQuery
    - Include stylessheet in assests folder.
        - Express middleware means you only need to reference from the public folder.
    - In the body create a form for adding an item to the list.
        - Text box for text
        - Button for submit
        - Div->form->input+button
    - Make a list of dummy content
2. Render in '/todo' get handler
    ```js
    res.render('todo');
    ```

## Part 4

1. Add dummy data at the top of the controller file
    ```js
    var data = [{item: 'milk'}, {itme: 'do something'}, {item: 'more stuff'}];
    ```
2. Pass the data into the view.
    - Pass into a second parameter in the render method
        ```js
        res.render('todo', {todos: data});
        ```
    - The data is passed through to the view by the 'todos' property name.

3. Adding items to the list dynamically
    - Adding and deleting items will be controlled by ajax requests.
    - When the form button is clicked the item var is set to the form input value and a todo var is created which is an object in which the 'item' property is set to the var 'item' value.
    - In summary whatever is typed into the form will be stored in the 'item' property of an object 'todo'.
    - This object will eventually be appended to the data object in the controller.
    - This is all in the todo-list.js file.

4. Ajax POST
    - When the ajax POST request is made it is handled with the 'app.post()' method in the controller.
    - The ajax POST request sends data to the handler which in this case is the 'todo' object.
    - When the recieved data has been processed it is sent back to the ajax request and the view is reloaded to reflect the changes.

5. Handling adding items.
    - The bodyParser module needs to be required.
        ```js
        var bodyParser = require('body-parser');
        ```
    - Set up url parser
        ```js
        var urlencodedParser = bodyParser.urlencoded({extended: false});
        ```
    - Add this middleware as a parameter in the post method
        ```js
        app.post('/todo', urlencodedParser, function(req, res){
            code goes here
        });
        ```
    - Push received data to the data array in the controller. The recieved data is on the request body.
        ```js
        data.push(req.body);
        ```
    - Send the updated data array back as JSON
        ```js
        res.json(data);
        ```
    - Once the data is received the page is reloaded and the code in the ejs template is re-run and will include the new item.
