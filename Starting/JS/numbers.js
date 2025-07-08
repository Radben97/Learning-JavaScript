const myNumber = 42;
const myFloat = 42.029934;
const myString = "a42.125252512";

//Numbers property
console.log(myNumber === myString);
console.log(Number(myString) + 3);
console.log(Number.isInteger(myFloat));
/* console.log(Number.parseFloat(myString)); // returns a floating no. */
console.log(typeof myFloat.toFixed(2)); // returns string
console.log(Number.parseInt(2)); // returns a integer
console.log(myFloat.toString()); // returns a string
console.log(isNaN(myString)); // returns a BOOLEAN
console.log(typeof myString); // returns a BOOLEAN
