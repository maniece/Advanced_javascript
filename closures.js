// CLOSURES - 1. Function inside a function that can be accessible outside. 2. the variable declared globally will be available inside the functions.

// Closure example 1

var a = 2;

function mul(){
	console.log('Multiplied result is '+ (a*a)); // we can able to access the variable a declared outside the function.
}

mul();

// Closure example 2

var foo = (function(){
	var b = 5;
	return function foo1(){
		return b*b;
	}
})();

console.log('Result is :'+foo());