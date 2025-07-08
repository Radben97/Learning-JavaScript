"use strict"; // for error handling and enforcing rules 

const myObj = {
  name: "mahesh",
  hobbies: ["swimming", "hearing to music", 4040],
  beverages: {
    morning: "Tea",
    evening: "biscuits",
    night: "nothing",
  },
  action: function () {
    console.log(`time for some ${this.beverages.evening}`);
  },
};

/* console.log(myObj);
myObj.action(); */

/* const sendJson = JSON.stringify(myObj);
console.log(sendJson); // the json discards any functions inside the object and also cannot access the properties
const recievedJson = JSON.parse(sendJson);
console.log(recievedJson); */ // but we lost our method

/* variable = "mah";
console.log(variable); */ // wouldnt work because of use strict on top


// types of errors
// 1. reference error 2. syntax error 3. type error

// error handling with try and catch

/* function makeerror() {
    try {
        const variable = "name";
        variable = "nope";
    } catch (error) {
        /* console.log(error); */
        /* console.error(error); */
       /*  console.error(error.stack);
        console.error(error.message);
        console.error(error.name);
        console.table(error);
    }
}
 */ 


function customError(message) {
    this.message = message;
    this.name = "custom error";
    this.stack = `${this.name}:  ${this.message}`;
}

function makeerror() {
    try {
        throw new customError("this is a custom error");
        /* throw new Error("this is a custom error"); */ // generic error constructor
        console.log("lol");
    } catch (error) {
        console.error(error.stack);
    } finally {
        console.log("finslly");
    } // finally runs even if there is n error
} // if try block catches an error then the rest of the block wouldnt be executed

makeerror();