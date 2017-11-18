console.log("hello");

setTimeout(function () {
    console.log("3 seconds have passed");
}, 3000);
/* 
var time = 0;
var timer = setInterval(function() {
    time += 2;
    if (time > 5) {
        clearInterval(timer);
    }
    console.log(time + " seconds have passed.");
}, 2000); */

console.log("Current dir: " + __dirname);
console.log("File name: " + __filename);