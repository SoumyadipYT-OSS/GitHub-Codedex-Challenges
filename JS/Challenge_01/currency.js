/*
    We just got back from a trip to Asia, specifically China, Japan, and South Korea. When we got back we have some leftover cash:

        🇨🇳 Chinese yuan
        🇯🇵 Japanese yen
        🇰🇷 South Korean won
        Create a currency.js program that starts with the amount you have in yuan, yen, and won and calculates the total in USD.

        Make sure to Google the current exchange rates!

        The output of the program should look like this:

        What do you have left in yuan? 560
        What do you have left in yen? 2455
        What do you have left in won? 3280

        105.5275
        Cha-ching! Now you have the total in USD. 💰

*/

// Defining the amount of money in each currency to USD
const EX_RATE_YUAN = 0.14;      // China
const EX_RATE_YEN = 0.0068; // Japan
const EX_RATE_WON = 0.00076;    // South-Korea

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, ans => resolve(ans)))
}

async function convertCurrency(yuan, yen, won) {
    const totalUSD = (yuan * EX_RATE_YUAN) + (yen * EX_RATE_YEN) + (won * EX_RATE_WON);
    console.log(totalUSD);
}

async function main() {
    const yuan = await askQuestion('What do you have left in yuan? ')
    const yen = await askQuestion('What do you have left in yen? ')
    const won = await askQuestion('What do you have left in won? ')
    console.log(`You have ${yuan} left in yuan, ${yen} left in yen, and ${won} left in won.`);
    rl.close();
    convertCurrency(yuan, yen, won);
}

main();