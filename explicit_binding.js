// EXPLICIT BINDING - .call and .apply functions take the first variable as a 'this' object for the binding function...

function foo1(){
	console.log("Country is :"+this.country);
}

function foo(){
	var obj = {country:'India'};
	foo1.apply(obj); // This json can be accessible using this parameter inside the foo1 function
}

foo();
