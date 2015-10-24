var fs = require('fs');

var str = fs.readFileSync(process.argv.slice(2).toString());
var newStr = str.toString().split('\n');
console.log(newStr.length - 1 );
