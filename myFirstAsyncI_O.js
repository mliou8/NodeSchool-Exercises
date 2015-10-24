var fs = require('fs');
//var filePath = process.argv.slice(2);

fs.readFile(process.argv.slice(2).toString(), function (err, data) {
 if (err) {
 	return console.log("ERROR");
 } else {
 	var newData = data.toString().split('\n');
 	console.log(newData.length - 1);
 }
});

//var newStr = str.toString().split('\n');
//console.log(str);
