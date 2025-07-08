/* class pizza {
  constructor(pizzaSize) { */
   /* /* /*  /* this.type = pizzaType; */
    /* this.Size = pizzaSize;
      this.crust = "original"; */
      /* this.toppings = ["olives"]; */
  /* } */ 
  /* get pizzaCrust() {
        return this.crust;
    }
    set pizzaCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    } */
  /* getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
    } */
    /* getToppings() {
        return this.toppings;
    } 
    setToppings(Toppings) {
        this.toppings.unshift(Toppings);
    } */
  /* bake() {
    console.log(`Baking a ${this.size} ${this.crust} ${this.type} pizza`);
  } */
/* }
 */
/* const myPizza = new pizza(prompt("what pizza sir?"));
myPizza.bake();
console.log(myPizza.crust);
/* myPizza.pizzaCrust = "thin"; */
/* myPizza.setCrust("thin");
console.log(myPizza.getCrust());
myPizza.setToppings("veggies");
console.log(myPizza.getToppings()); */

// child classes

/* class pizzaSpecialty extends pizza {
    constructor(pizzaSize) {
        super(pizzaSize);
      this.type = "speed";
  }
  slice() {
    console.log(`our ${this.type} ${this.Size} pizza`);
  }
}

const newPizza = new pizzaSpecialty("medium");
newPizza.slice(); */

// _.crust or any property with underscore in front indicates that it should not be modified outside the class

// another convention
// factory function

/* function myPizzaFactory(pizzaSize) {
  const size = pizzaSize;
  const crust = "thin";
  return {
    bake: function () { console.log(`${size} ${crust} crust pizza is ready!`) }
  };
}

const myPizza = myPizzaFactory("LARGE");
myPizza.bake(); */

// new javascript feature

class Pizza {
  company = "none"; // public field
  #sauce = "secret"; // private fields
  #size;
  constructor(pizzaSize) {
    this.#size = pizzaSize;
    this.crust = "thin";
  }
}
const myPizza = new Pizza("large");
console.log(myPizza.#size); // example of private

