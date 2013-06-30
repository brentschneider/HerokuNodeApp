#!/usr/bin/env node
var fs = require('fs');
var outfile = "hello.txt";
var out = "Basic Node.js example writing out message to Hello.txt.\n";
var more = "A startup is a business built to grow rapidly.\n";
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + " some.." +  more + "To: " + outfile);