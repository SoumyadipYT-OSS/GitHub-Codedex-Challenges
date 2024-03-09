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

const axios = require('axios');

async function getLocation() {
    try {
        const response = await axios.get('https://ipapi.co/json/');
        const location = response.data;
        return location;
    } catch (error) {
        console.error(error);
    }
}

async function getAQI(city, country) {
    try {
        const response = await axios.get(`https://api.openaq.org/v1/latest?country=${country}&city=${city}`);
        const aqi = response.data.results[0].measurements[0].value;
        return aqi;
    } catch (error) {
        console.error(error);
    }
}

async function main() {
    const location = await getLocation();
    const aqi = await getAQI(location.city, location.country_code);
    console.log(`The AQI in ${location.city}, ${location.region}, ${location.country} is ${aqi}`);
}

main();