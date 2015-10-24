var total = 0;
var numbers = process.argv.slice(2);


numbers.forEach(add);

function add(num) {
	var newNum = Number(num);
	total = total + newNum;
}

console.log(total);