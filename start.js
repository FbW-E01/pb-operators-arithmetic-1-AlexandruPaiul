/**0. Declare two variables "snackServings" and "guests"
 *  and assign them number values. */
const nackServings = 5;
const guests = 10;
console.log(nackServings, guests);
// 1. Add snackServings and guests.
const add = nackServings + guests;
console.log(add);
/**2. Subtract guests from snackServings. 
 * Then, subtract snackServings from guests. */
const subtract1 = guests - nackServings;
const subtract2 = nackServings - guests;
console.log(subtract1, subtract2);
// 3. Multiply snackServings and guests.
// 4. Divide snackServings by guests.
const multip = nackServings * guests;
const divid = nackServings / guests;
console.log(multip, divid);
/** 5. Declare another variable "drinks" with value "10".
 *  Multiply snackServings and guests.
 *  Then, divide the result by drinks.
 *  Store the result in a new variable named "resultOne".
 *  Print "resultOne" to the console.*/ 
const drinks = 10;
const resultOne = multip/drinks;
console.log(resultOne);
/**Declare two variables: "monkeys" with value 15, and "bananas" 
 * with value 9. Divide monkeys by bananas. */
let monkeys = 15;
let bananas = 9;
console.log(monkeys/bananas);
/** Declare another variable "monkeyfights" with value 20.
 *  Add monkeys and bananas, then multiply the result by monkeyfights. 
 * Store the result in variable "resultTwo".  Print "resultTwo" to the console.*/
const monkeyfights = 20;
const resultTwo = (monkeys+bananas)*monkeyfights;
console.log(resultTwo);
/**Increment monkeys. */
monkeys++;
console.log(monkeys);
/**Decrement bananas.
 */
bananas--;
console.log(bananas);
/**Subtract monkeys from bananas and store this in a new variable
 *  "happiness". Add happiness and monkeyfights. */
const happiness = monkeys-bananas;
console.log(happiness);
console.log(happiness+monkeyfights);
/**Print the remainder when "resultOne" is divided by 
 * "resultTwo" to the console. */
console.log(resultTwo%resultTwo);

