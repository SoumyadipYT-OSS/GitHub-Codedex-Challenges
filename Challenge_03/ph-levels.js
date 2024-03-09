/*
In chemistry, pH is a scale used to specify the acidity or basicity of a fluid.

Create a ph-levels.js program that checks whether a pH level is basic, acidic, or neutral.

First, create a variable called ph and give it a value between 0 and 14.

Write an if/else if/else statement that:

If ph is greater than 7, output “Basic”.
Else if ph is less than 7, output “Acidic”.
Else, output “Neutral”.
*/


const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, ans => resolve(ans)))
}

async function checkPHLevel(ph) {
    if (ph > 7) {
        console.log('Basic');
    } else if (ph < 7) {
        console.log('Acidic');
    } else {
        console.log('Neutral');
    }
}

async function main() {
    const ph = await askQuestion('Enter a pH level between 0 and 14: ')
    rl.close();
    checkPHLevel(ph);
}
main();