// Javascript event listeners

/* const view1 = document.querySelector("#view1");
const h2 = view1.querySelector("h2"); */
/* console.log(view1); */
// syntax: addEventListener(event,function,useCapture)
/* const doSomething = () => {
    alert("doing something");
} */

/* h2.addEventListener("click", doSomething, false); // usecapture is false by default
h2.removeEventListener("click", doSomething, false); */ // to remove it
// using anonymous functions

/* h2.addEventListener("click", (event) => {
    console.log(event.target);
    event.target.textContent = "clicked";
}) */

// ready state change event: to tell when the page is ready to interact with dom i.e. it is oloading

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readystate: complete");
    initApp();
  }
});

const initApp = () => {
  const header = document.querySelector("header");
  const view1 = document.querySelector("#view1");
  const h2 = view1.querySelector("h2");
  const view2 = document.querySelector("#view2");
  const h21 = view2.querySelector("h2");
  const div = h21.querySelector("div");
  h2.addEventListener("click", (event) => {
    view1.style.backgroundColor = "purple";
  });

  h2.addEventListener("click", (event) => {
    event.target.textContent = "clicked";
  });

  h21.addEventListener("click", (event) => {
    div.classList.toggle("darkBlue");
    div.classList.toggle("purple"); // replace add and remove with toggle
    /* div.style.backgroundColor = "crimson"; */
  });

  header.addEventListener("mouseover", (event) => {
    event.target.classList.add("height100");
  });

  header.addEventListener("mouseout", (event) => {
    event.target.classList.remove("height100");
  });
};

// event bubbling- it occurs when u have an element innside an element2 and u add an eventlistener to  element and when click on element element2 also changes if an eventlistener is defined for that. this moves from inside to outer.
// if u set usecapture as true then this would go from outer side to inwards and by using stopPropagation() at a specific element's event listener u could stop that outer to inner movement at that element.
// use preventDefault() to prevent default actions like a form submitting reloads the page from occuring
