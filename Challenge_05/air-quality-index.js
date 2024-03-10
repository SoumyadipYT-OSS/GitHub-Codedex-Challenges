/*
In summer 2023, the smoke from wildfires in Canada raised concerns about the Air Quality Index (AQI) in one's area.

Create an air-quality-index.js program.

Google the AQI in your area and define an aqi variable with that number.

Write an if/else if/else statement with the following logic:

If aqi is between 0 and 50, print “Good”.
Else if aqi is between 51 and 100, print "Moderate".
Else if aqi is between 101 and 150, print "Unhealthy (Sensitive Groups)".
Else if aqi is between 151 and 200, print "Unhealthy".
Else if aqi is between 201 and 300, print “Very Unhealthy”.
Else, print “Hazardous”.
*/


function printAQIMessage(aqi) {
    if (aqi >= 0 && aqi <= 50) {
        console.log("Good");
    } if (aqi >= 51 && aqi <= 100) {
        console.log("Moderate");
    } if (aqi >= 101 && aqi <= 150) {
        console.log("Unhealthy (Sensitive Groups)");
    } if (aqi >= 151 && aqi <= 200) {
        console.log("Unhealthy");
    } if (aqi >= 201 && aqi <= 300) {
        console.log("Very Unhealthy");
    } if (aqi > 300) {
        console.log("Hazardous");
    }
}


const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, ans => resolve(ans)))
}

async function main() {
    const aqi = await askQuestion('Enter the Air Quality Index (AQI) in your area: ')
    rl.close();
    printAQIMessage(aqi);
}
main();