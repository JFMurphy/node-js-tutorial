# Notes - The Event Module

NodeJS has built-in core modules. These can be 'required' the same way as custom modules are required.  
When requiring a core module just the module name is needed in require()

**Example:**

```
var events = require('events')
```

Whatever is returned on the module.exports object in the `events` module will be available to us through the `events` variable.

EventEmitter is used to create custom events and react to those events.  
Similar to jQuery `.on()`  
    e.g. `element.on('click', function(){})`  
    When `element` emits a click event we want to fire the callback function.

1. Create var 'myEmitter'
2. Set equal to new eventEmitter object
    ```javascript
    var myEmitter = new events.EventEmitter();
    ```
3. An eventEmitter object is now stored in myEmitter.
4. We can now wire up events to this.
    ```javascript
    myEmitter.on('someEvent', function(msg){ 
    })
    ```
    - when `someEvent` is emitted fire the callback function.

5. To emit the event:
    ```javascript
    myEmitter.emit('someEvent', msg); 
    ```
    - The first parameter is the event that should be emitted and every parameter following is passed as a parameter into the callback functions parameter list.
6. Require `util`  
    6.1. `util` allows us to inherit things from other objects.
7. Create var 'Person'
8. Use util to make Person inherit the EventEmitter.
9. Create some 'people'  
    ```javascript
    var name = new Person('name');
    ```
10. Store the people in an array
    ```javascript
    var people = [name, name2, name3];
    ```
11. Attach a custom event to each person and declare a callback function which will be something that they say.
    ```javascript
    people.forEach(function(person){
        person.on('speak', function(msg){
            console.log(person.name + "said: " + msg
        })
    });
    ```
    - `name` is the property that is created in the constructor for Person.
    - When the `speak` event is emitted the callback function will fire and log the name of the person who spoke and what they said.
12. Emit an event from a person.
    ```javascript
    james.emit('speak', 'hey dudes');
    ```
    - **Remember:** the first param is what event it being emitted and the params that follow will be passed to the callback function. In this case 'hey dudes' is passed to the msg param in the callback function.
