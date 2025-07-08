const arrayA = [1, 2, 3];
const arrayB =  [4,5,6,7];
/* const myArray = [1,2,3,4,5,6,7]; */
/* myArray[0] = "HELLO";
myArray[1] = "world";  */
/* console.log(myArray);
// length property
console.log(myArray.length);
// last element in an array
console.log(myArray[myArray.length - 1]);
// adding elements to the array
myArray.push(1001);
console.log(myArray);
const lastItem = myArray.pop(); // pop() gives off the removed variable
console.log(lastItem);
myArray.unshift("sock");
console.log(myArray);
// unshift and push gives off the length of the new array
myArray.shift(); */ // gives off the removed item

// to remove or add at any position

/* delete myArray[1]; */
 // gives off an empty undefined on the position but position exists
/* myArray.splice(1, 1);
console.log(myArray); */
/* myArray.splice(1, 1,42);
console.log(myArray);
myArray.splice(1, 0, 43); 
console.log(myArray); */

 // note: slice doesnt modify preexising array it generates a new one with the mods
/* const slicedArray = myArray.slice(1,5);
console.log(slicedArray); */

/* myArray.reverse();
console.log(myArray);
const newString = myArray.join(); // gives off a new string
console.log(newString);
const splittedString = newString.split(","); // gives of a new array
console.log(splittedString); */

// combining 2 arrays
/* const newArray = arrayA.concat(arrayB);
const newArray2 = arrayB.concat(arrayA);
console.log(newArray);
console.log(newArray2); */
// using spread operator ... instead of concat
/* const newArray = [0,...arrayA,42,47, ...arrayB];
console.log(newArray);
 */
// multidimensional array (2D)

equipshelfA = ["dumbells", "skipping ropes", "benchpress"];
equipshelfB = ["Soap", "toothbrush", "protein bottle"];
clotheshelfA = ["chinos", "cargo pant", "jeans"];
clotheshelfB = ["t-shirt", "shirt", "coatsuit"];

equipdept = [equipshelfA, equipshelfB];
clothesdept = [clotheshelfA, clotheshelfB];
console.log(equipdept[0][1]);
console.log(clothesdept[1][2]);