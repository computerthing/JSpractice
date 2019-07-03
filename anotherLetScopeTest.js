//start

j = "test"

console.log("global: " + j);

{  // block scope solely created to isolate 'let' statement
// console.log(j); //""ReferenceError: j is not defined" 
	let j;
	console.log("block-scope, pre-loop j: " + j);
	for (j=0; j<10; j++) { // this block scope {..} and 'let' statement isolates the following variable 'j'
		console.log("global: " + global.j)
		let j = 1; // re-bound for each iteration
		console.log("let j: " + j ); // this will always return one, and the for-loop in the enclosing scope will still loop from 0 to 10
	}
};


//end