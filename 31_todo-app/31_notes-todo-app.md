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



## Part 3

