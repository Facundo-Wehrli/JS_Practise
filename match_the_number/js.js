/*EXP Math.ceil()
 function is used to get the smallest integer greater than or equal to a given number.
*/
/*EXP The Math.random() 
 method is a built-in JavaScript function that returns a random number between 0 (inclusive) and 1 (exclusive).
  This means that the returned value will always be greater than or equal to 0, but less than 1.
  The random number can then be used in various applications such as generating random numbers for games, simulations, or statistical sampling*/

//get a random integer from 1 to 10 inclusive
const num = Math.ceil(Math.random() * 10);
console.log(num);

const gnum = prompt("Guess the number between 1 and 10 inclusive");
if (gnum == num) {
    alert("Matched! i knew you were a good guesser ;)");
}
else alert("not matched! the number was " + num);