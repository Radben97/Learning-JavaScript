// not part of DOM
// refers to window API
// no need to use window as its globally implied
/* window.alert("og ofo fo");
alert("og ofo fo"); */

/* alert(window.location); */

const myObj = {
  Name: "mox",
  logName: function () {
    console.log(this.Name);
  }, // dont use arrow style while defining methods in objects.
};

/* myObj.logName(); */
const myArray = ["eat", "binge", "sleep", "repeat"];

sessionStorage.setItem("sesstore", JSON.stringify(myObj));
const sessstorage = JSON.parse(sessionStorage.getItem("sesstore"));
console.log(sessstorage);

// session and webstorage save data as strings
// sessionStorage - keeps data till the web session exists
// localStorage(persistent data) - keeps data even after the page is closed

localStorage.setItem("localStorage", JSON.stringify(myArray));
const localsession = JSON.parse(localStorage.getItem("localStorage"));
console.log(localsession);

const storageVal = sessionStorage.key(0);
const length = sessionStorage.length;
console.log(storageVal);
console.log(length);