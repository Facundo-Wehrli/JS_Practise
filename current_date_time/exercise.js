// create an array of weekday names
const weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
// get the current date and time
var now = new Date();
// get the weekday name from the weekdays array
const weekday = weekdays[(now.getDay())];
// get the hours, minutes, and seconds
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

// determine if it's AM or PM
const meridian = hours >= 12 ? "PM" : "AM";

// convert to 12-hour time
hours = hours % 12;
// the hour '0' should be '12'
hours = hours ? hours : 12;

// format the minutes and seconds with leading zeros
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

// create the formatted time string
const timeString = hours + " " + meridian + ": " + minutes + " : " + seconds;
// create the full message string
const message = "Today is "+ weekday + ".\nCurrent time is "+ timeString; 
// display the message in the console
console.log(message);