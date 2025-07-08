// DOM - documented object model

/* const view1 = document.getElementById("view1"); */
const view1 = document.querySelector("#view1");
const view2 = document.querySelector("#view2");
/* console.log(view1); */
// changin the display of the elements
/* view1.style.display = "flex";
view2.style.display = "none"; */
// other way to select elements
/* const views = document.getElementsByClassName("view"); */
/* const xviews = document.getElementsByClassName("view"); */
/* const views = document.querySelectorAll(".view"); */
/* console.log(views); */
/* console.log(xviews); */

const divs = view1.querySelectorAll("div");
console.log(divs);
const samedivs = view1.getElementsByTagName("div");
console.log(samedivs);

// selecting even boxes

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n");
console.log(evenDivs);

// altering the divs

for (let i = 0; i < evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = "green";
  /*   evenDivs[i].style.width = "50px";
  evenDivs[i].style.height = "50px"; */
}
// changingtext use textContent

const header = document.querySelector("header");
header.innerHTML = `<h1>Hello</h1> <p> welcome back to my page</p>`;

//dom tree

console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children); // shows elements
console.log(evenDivs[0].parentElement.childNodes); // shows everything
console.log(evenDivs[0].parentElement.hasChildNodes()); // checks whether there are childnodes or not
console.log(evenDivs[0].parentElement.firstElementChild); //
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].previousElementSibling);

// creating and deleting elements

/* view1.style.display = "none";
view2.style.display = "flex";
view2.style.backgroundColor = "aqua";
view2.style.flexDirection = "row";
view2.style.alignItems = "center";
view2.style.justifyContent = "center";

while (view2.lastChild) {
    view2.lastChild.remove();
}
 */
view2.textContent = " ";
view2.style.display = "flex";
view2.style.justifyContent = "center";
view2.style.alignItems = "center";
view1.style.display = "none";
const createDivs = (parent, iter) => {
  const newDiv = document.createElement("div");
  newDiv.style.display = "flex";
  newDiv.style.backgroundColor = "red";
  newDiv.style.flexDirection = "row";
  newDiv.style.alignItems = "center";
  newDiv.style.justifyContent = "center";
  newDiv.style.height = "100px";
  newDiv.style.width = "100px";
  newDiv.textContent = iter;
  parent.append(newDiv);
};

const createMoreDivs = (parent, iter) => {
  for (let i = 0; i <= iter; i++) {
    createDivs(parent, i);
  }
};
createMoreDivs(view2, 10);
