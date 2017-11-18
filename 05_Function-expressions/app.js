// Normal function statement
function sayHi() {
    console.log("Hi");
}
console.log("Call sayHi()");
sayHi();

// function expression
var sayBye = function() {
    console.log("bye");
};
console.log("Call sayBye()");
sayBye();

function callFunction(fun) {
    fun();
}
console.log("Call sayBye() through the parameter of another function.");
callFunction(sayBye)