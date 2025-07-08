import playing from "./guitar.js";
import { shredding as shred, plucking as picking } from "./guitar.js";
import user from "./user.js";

console.log(playing());
console.log(picking());
console.log(shred());
const me = new user("email@email.com", "gonn");
// another import method is
// import * as guitars from "./guitars.js"
// but then before all imported functions u have to write guitars.playing()
// problem with this is we can change the name of these functions locally
// if a function is a default function u have to call them by guitars.default()
console.log(me);
console.log(me.display());
