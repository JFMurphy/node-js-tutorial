# Notes - Installing nodemon

Server code has been reused to demonstrate how nodemon works.

Nodemon monitors application files and when a change is made in a file it will automatically restart the server so that the changes are reflected in the running code.

Installation:

1. Use the install command with the global flag (-g) so that the package is installed globally and will be usable across all applications.
    ```
    npm install -g nodemon
    ```
2. This means nodemon only needs to be installed once if it needs to be used.
3. To run it the nodemon command is used:
    ```
    nodemon app.js
    ```
4. The info that appears after this command is run is the version of the package, how to manually restart the app and what files it is watching.
5. When a change is made to the app the server will automatically be restarted.