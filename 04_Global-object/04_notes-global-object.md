# Notes - The Global Object

The global object is the window object
    Properties can be accessed on that window object.
        e.g. Alert, scroll, set timeout etc

In node the global object is no longer the window object.
    It is an object called global.
    It gives us access to built-in methods

1. Create app.js file.
2. Log to console:
    > console.log("hello");
    This is a method available through the global object
3. Use setTimeout() to log to console after an elapsed period of time.
    > setTimeout(function() {
        console.log("3 seconds have passed.");
    });
4. Use setInterval to log to console every so often.
    > setInterval(function() {
        console.log(*text in here*);
    });
5. store setInterval in a variable 'timer' and make it stop after 5 seconds have passed.
    > clearInterval(timer)
6.  Node can tell us what directory we are in. '__dirname'
7. And also what file the command originated from. '__filename'
8. These methods and many others can be used anywhere in a node app as they exist within the global object.
