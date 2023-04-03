
//firstable we need to create an array of weekday names
const weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
// get the current date and time
var now = new Date();
// get the weekday name from the weekdays array
const weekday = weekdays[(now.getDay())];
// get the hours, minutes, and seconds
/*  EXP getHours
The getHours() method is used to get the hour for a given date, according to local time. The value returned by getHours() is an integer between 0 and 23. */
let hours = now.getHours();
/*EXP getMinutes
The getMinutes() method is used to get the minutes in the specified date according to local time. The value returned by getMinutes() is an integer between 0 and 59.
*/
let minutes = now.getMinutes();
/*EXP 
getSecondsThe getSeconds() method is used to get the seconds in the specified date according to local time. The value returned by getSeconds() is an integer between 0 and 59.
 */
let seconds = now.getSeconds();

// determine if it's AM or PM
//EXP the value of hours its greater or equal to 12 meridian it's going to be "PM", otherwise it's "AM"
const meridian = hours >= 12 ? "PM" : "AM";

/*EXP convert to 12-hour time, 
lets say we have the variable hour with the value of 18,
18 divided by 12 equals
1 with a remainder of 6 
so instead of having the value of 18, it will be converted to the reminder of 12 wich is its equivalent to 6PM
 */ 
hours = hours % 12;
// the hour '0' should be '12'
//if thevalue of hours is a falsy value(zero in this case) then when its hour ZERO it will be converted to number 12, so we don't have the hour '0'
hours = hours ? hours : 12;

// format the minutes and seconds with leading zeros
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

// create the formatted time string
const timeString = hours + " " + meridian + ": " + minutes + " : " + seconds;
// create the full message string
const message = "Today is " + weekday + ".\nCurrent time is " + timeString;
// display the message in the console
console.log(message);