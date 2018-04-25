# Notes - Function Expressions

1. Create normal function statement  
    ```javascript
    sayHi()
    ```

2. Create a variable and assign a function to it.
    ```javascript
    var sayBye = function(){};
    ```
    * (This is an anonymous function.)

3. You can pass through a function as a parameter in another function.  
    ```javascript
    function callFunction(fun){
        fun()
    }

    callFunction(someOtherFunction);
    ``` 
    (This will run *someOtherFunction*.)