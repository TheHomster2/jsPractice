// to run just type "node <filename>"
/*
function <name>(){
	<code>
}
*/

// g() = 5
// h(x) = 3x - 2
// Write a function that takes two arguments and returns double their sum.
// a(x, y, z) = 5x + 2y - 3z + 7
// b(x, y, z) = h(x) + h(y) + a(x, y, z)


// notice the diffrerence between using "const", "var", and "let"

function g(){
	return 5;	
}

function h(x){
	return 3 * x - 2;
}

function arg(x,y){
	return 2 * (x + y);
}

function a(x,y,z){
	return 5 * x + 2 * y - 3 * z + 7
}

function b(x,y,z){
	return h(x) + h(y) + a(x, y, z);
}

console.log(g());
console.log(h(1));
console.log(arg(1,2));
console.log(a(1, 2, 3));
console.log(b(1, 2, 3));


var globe = 'hello';
console.log(globe);
globe = "world";
console.log(globe);

function repeat(triple){
	if (typeof triple === 'string' || triple instanceof String){
	return triple + triple + triple;
	}
	else{
		const alert = "Input is not a string";
		console.log(alert);
	}
}

console.log(repeat('hello'));
console.log(repeat('1'));
console.log(repeat(1));

// Write a function which takes one argument and returns "BIG!" if the number is bigger than 10, and "small" otherwise.
// Write a function which takes one argument and returns "negative" if the number is below zero, "positive" if the number is above zero, and "zero" if the number is zero.
// Write a function that takes two arguments and returns "same" if the arguments are the same, "different" if the arguments are different.

function compare1(arg){
	if (arg > 10){
		return "Big!";
	}
	else{
		return "small";
	}
}

function compare2(arg){
	if (arg > 0){
		return "positive";
	}
	else{
		return "negative";
	}
}

function compare3(arg1, arg2){
	if (arg1 === arg2){
		return "same";
	}
	else{
		return "different";
	}
}

function mult(){
	var total3 = 0; 
	var total5 = 0;
	var totalb = 0;
	var total = 0;
	//find mulitples of both
	for (var k = 0; k < 1000; k++){
		if (((k % 5) === 0) && ((k % 3) === 0)){
			totalb += k;
		}
	}
	//find multiples of 3
	for (var i = 0; i < 1000; i++){
		if ((i % 3) === 0){
			total3 += i;
		}
	}
	//find multiples of 5
	for (var j = 0; j < 1000; j++){
		if ((j % 5) === 0){
			total5 += j;
	}
}
	return total = total5 + total3 - totalb;
}

//easier method 
/*
var total = 0;
for (var i = 0; i < 1000; i++){
	if (((i % 3) == 0) || ((i % 5) == 0)){
	total += i;
	}
}
*/

console.log(mult());

// Write a for loop which prints the numbers from 0 to 20 along with the word "even" or "odd" depending which is true for the given number.
// Write a function which takes an array as an argument, and doubles every number in the array.
// Write a function which takes an array and of numbers and retains only the odd numbers.
// Challenge exercise: write a function called "fizzbuzz" which:

// prints the numbers 1 to 100, except that it
// prints "fizz" if the number is divisible by 3
// prints "buzz" if the number is divisible by 5
// prints "fizzbuzz" if the number is divisible by both

function arr1(number){
	var arr = [];
	var answer;
	for(var i = 0; i <= number; i++){
		if ((i % 2) === 0){
			arr.push(i, "even");
		}
		else{
			arr.push(i, "odd")
		}
	}
	return arr;
}

console.log(arr1(20));

function doubleArr(arr){
	for (var i = 0; i < arr.length; i++){
		arr[i] = 2 * arr[i];
	}
	return arr;
}

console.log(doubleArr([1,2,3]));

function oddOnly(arr){
	for (var i = 0; i < arr.length; i++){
		if (typeof arr[i] === 'number'){
			if (arr[i] % 2 === 0){
				arr.pop();
			}
		}
	}
	return arr;
}

function fizzbuzz(number){
	for(var i = 0; i <= number; i++){
		if (((i % 5) === 0) && ((i % 3) === 0)){
			console.log("fizzbuzz");
		}
		else if ((i % 3) === 0){
			console.log("fizz");
		}
		else if ((i % 5) === 0){
			console.log("buzz");
		}
		else{
		console.log(i);
		}
	}
}

console.log(fizzbuzz(100));

function fibonacci(){
	var total = 0;
	var prev = 0;
	var curr = 1;
	var temp;
	while(curr <= 4000000){
		temp = curr + prev;
		prev = curr;
		curr = temp;
		if (curr % 2 === 0){
			total += curr;
		}
	}
	return total;
}

console.log(fibonacci());



















