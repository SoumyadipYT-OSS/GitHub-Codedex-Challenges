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
    console.log("Wake up, brush your teeth, and eat breakfast.");
} else if (hour >= 12 && hour < 18) {
    console.log("Good afternoon 🌤");
    console.log("Time to eat lunch and take a nap.");
} else if (hour >= 18 && hour < 9) {
    console.log("Good evening 🌙");
    console.log("Time to eat dinner and read book.");
} else {
    console.log("Good night 🌚");
    console.log("Time to go to bed.");
}