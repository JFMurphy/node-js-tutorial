# Notes - The packages.json file

The packages.json file keeps track of dependencies.  
This can be created manually or created using a nodejs command.

1. Run the following in the root folder of your project:
    ```
    npm init
    ```
2. This will ask a series of questions about the project such as the name, author etc.
3. A package.json file is created and it contains some information about the project.

When packages are installed that the application depends on and the application code is passed to another developer the packages aren't passed along with it.  
When a new developer picks up the app they will need to install the same packages that were originally used to make the app.  
The file keeps track of dependencies when a package is installed using a save flag.

**Example: Install Express to demostrate this.**
1. Install Express with a save flag.
    ```
    npm install express -save
    ```
2. This will install express and update the package.json file to include all the dependencies for the express package.
3. When the express package is uninstalled it will remain in the package.json file.  
    3.1 A package has to be uninstalled with the following command to install it while keeping the dependency in the package.json file.  
    ```
    npm uninstall express --no-save
    ```
4. To install all the dependencies listed in the package.json file one command is used instead of having to install them all manually.
    ```
    npm install
    ```