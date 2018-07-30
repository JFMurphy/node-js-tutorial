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
    