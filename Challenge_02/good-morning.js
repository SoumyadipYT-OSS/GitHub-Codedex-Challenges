/*
Create a good-morning.js program that prints a message if it's early in the day.

Define an hour variable and give it the current time of day.

Write an if statement for the following:

If hour < 12, print “Good morning 🌞” and some of your morning routines.
After you run the code, change hour's value and run it again. Do this a few times to make sure the program is working as intended.
*/


let date = new Date();
let hour = date.getHours();

if (hour > 4  &&  hour < 12) {
    console.log("Good morning 🌞");
} else if (hour >= 12 && hour < 18) {
    console.log("Good afternoon 🌤");
} else if (hour >= 18 && hour < 9) {
    console.log("Good evening 🌙");
} else {
    console.log("Good night 🌚");
}