// JS Script - Canvas File

// check JS is hooked up:
console.log("check if canvas.js is linked correctly");

// select HTML cancas element using ID for us in JS code:
let canvas = document.getElementById("myCanvas");

// pull in Cancas Rendering + console log to see attributes available:
let ctx = canvas.getContext("2d");
console.log (ctx);

//changing the background colour of my canvas element:
ctx.fillStyle='green';
ctx.fillRect(0,0,canvas.width,canvas.height);

