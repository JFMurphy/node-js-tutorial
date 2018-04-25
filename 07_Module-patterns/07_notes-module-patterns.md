# Notes - Module Patterns

** _Reusing code from 06_ **

_count.js renamed to stuff.js  
update app.js' `require` method to reflect this change._

1. Create var 'adder' and assign a function that takes two parameters: 'a' and 'b'
2. Use a template string.  
    2.1. Template strings use backticks (\`)  
    2.2. Variables can be embedded in template strings without having to concatenate.  
    - e.g. \`This string will print ${foo}\`; (This will access the foo variable and print it. Make sure to use curly braces.)
3. Add pi var.
4. module.exports is an empty object.
5. Properties can be added to the object
    e.g. modules.exports.counter = counter
6. Update require() to stuff
7. The module.exports object and all its properties are now stored in 'stuff'
8. The properties can be access like so:  
    ```javascript
    stuff.counter
    stuff.adder
    stuff.pi
    ```
9. Function could instead be directly exported as soon as they are created.
    `module.exports.counter = function()...`
10. Properties can also be added to module.exports in literal notation.  
    e.g.
    ```javascript
    module.exports = {
        counter: counter,
        adder: adder,
        pi: pi
    };
    ```