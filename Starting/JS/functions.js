// methods are builtin functions
/* function sum(num1,num2) {
    if (num2 === undefined) {
        return num1 + 0;
    }
    return num1 + num2;
}

console.log(sum(2)); */

/* function userNamefromEmail(email) {
    let userName = email.slice(0, email.indexOf("@"));
    return userName;
}

console.log(userNamefromEmail("aske1@gmail.com"));
// anonymous functions
let userNamefromEmail1 =  function (email) {
  let userName = email.slice(0, email.indexOf("@"));
  return userName;
} */

// new way of defining functions
/* let userNamefromEmail1 = (email) => {
  let userName = email.slice(0, email.indexOf("@"));
  return userName;
};
console.log(userNamefromEmail1("raaaa@gmail.com")); */

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};
console.log(toProperCase("mahESH"));