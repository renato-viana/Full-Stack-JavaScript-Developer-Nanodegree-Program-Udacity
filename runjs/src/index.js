const currentFile = __filename.split('\\').splice(9).join('\\');

console.log('NODE RAN:', currentFile);

const path = require('path');

console.log(path.resolve('index.js'));

console.log(path.normalize('//src//..'));

// Used to concatenate strings to create a path that works across operating 
// systems. It joins the strings, then normalizes the result.
console.log(path.join('src', '..', '/index.js'));

const fs = require('fs');