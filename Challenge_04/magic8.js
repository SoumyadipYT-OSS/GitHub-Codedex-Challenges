/*
The Magic 8 Ball is a popular office toy and children's toy invented in the 1940's for fortune-telling and advice seeking. 🎱

It's an oversized 8 ball with some of the following answers:

Yes - definitely.
It is decidedly so.
Without a doubt.
Reply hazy, try again.
Ask again later.
Better not tell you now.
My sources say no.
Outlook not so good.
Very doubtful.
Create a magic8.js program that can respond to any Yes or No questions with a different answer each time it executes.

The output should have the following format:

Question:       [Question]
Magic 8 Ball:   [Answer]

For example:

Question:       Is Codédex better than Udemy yet?
Magic 8 Ball:   Better not tell you now.
*/

const readline = require('readline')


const rl = readline.createInterface({
    input: process.input,
    output: process.output
})

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, ans => resolve(ans)))
}

async function magic8Ball(question) {
    const answers = ["Yes -definetely", "It is decidedly so", 
    "Without a doubt", "Reply hazy, try again", "Ask again later", 
    "Better not tell you now", "My sources say no", 
    "Outlook not so good", "Very doubtful"
    ]

    const index = Math.floor(Math.random() * answers.length);
    const response = answers[index];
    
    console.log(`Question: ${question}`);
    console.log(`Magic 8 Ball: ${response}`);
}


async function main() {
    const Question = await askQuestion('Question: ')
    rl.close()
    magic8Ball(Question)
}
main();