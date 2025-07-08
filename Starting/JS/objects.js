/* const myObj = {
    name: "mahesh",
    hobbies: ["swimming","hearing to music",4040],
    beverages: {
        morning: "Tea",
        evening: "biscuits",
        night: "nothing",
    },
    action: function () {
        return `time for some ${this.beverages.evening}`;
    }
 };
console.log(myObj["name"]);
console.log(myObj.beverages.morning);
console.log(myObj.action());
 */

/* const vehicle = {
    engine: function () {
        return "vrooom";
    },
    wheels: 4
}

const truck = Object.create(vehicle);
truck.doors = 2;
truck.engine = function () { return "whooooosh" };
console.log(truck.engine());
truck.wheels = 6;
console.log(truck.wheels); // inheritance
const tesla = Object.create(truck);
tesla.engine = function () { return "shhhhhh" };
console.log(tesla.engine()); */
const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul",
  drums: "john Bonham",
};

/* console.log(Object.keys(band));
console.log(Object.values(band));
for (let job in band) { // for in loop
    console.log(band[job]); // .job loooks for actual value job since its static but [] is dynamic
} */
/* band.keyboard = ""  to add things in the object*/
/* console.log(band.hasOwnProperty("keyboa")); */ // to check if key exists inside object or not

// destructuring objects
const { vocals, guitar, bass, drums } = band;
console.log(vocals);
console.log(guitar);
console.log(bass);
console.log(drums);
function sings({ drums, vocals }) {
  return `${drums} and ${vocals} sing`;
}
console.log(sings(band));
