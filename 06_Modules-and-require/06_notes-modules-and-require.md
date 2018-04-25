# Notes - Modules and require

Application code is not all put in one file.
Code is split into modules that each provide certain functionality.
Example:  
- Create a module for counting.  
- Call on this module only when needed.  
- A module is an additional JS file.
#

1. Create a file called count.js
2. Create var 'counter'
3. Assign to anonymous function.
4. Function will take an array as an argument.
5. Function will return amount of items in the array.
6. Add some items to the array while logging to console.
7. To use this function in other files in the app we need to use the 'require' function
    7.1. This is on the global object.
8. Write:
    ```javascript
        require(*path to module*)
        require('./count') ('./' refers to current directory.  '.js' is not needed.)
    ```
9. Methods in a module are not available until they are explictly provided in the module.
10. The method in count.js needs to be exported to be made available in the app.js file.
    > module.exports = counter;
11. module.exports is what is being returned when the require() method is called.
12. require() needs to be assigned to a variable in app.js