/* let myBool = confirm("Ok===True\nCancel===False");
console.log(myBool); */

let sup = prompt("Enter your name: ");
/* console.log(sup ?? "you didnt enter your name") */; // nullish coalescing operator (??) requires a 0 or false to trigger the fallback
console.log(sup || "you didnt enter your name"); // this fixes the issue of ?? not working when clicked ok
// use trim() to remove whitespacess