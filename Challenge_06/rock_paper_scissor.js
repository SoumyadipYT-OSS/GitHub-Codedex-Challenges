function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    }

    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    }

    return 'You lose!';
}

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    console.log(`You chose ${userChoice}`);
    console.log(`The computer chose ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
}



async function main() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function askQuestion(query) {
        return new Promise(resolve => rl.question(query, ans => resolve(ans)))
    }

    console.log('Rock, Paper, or Scissors?');
    const userChoice = await askQuestion('Enter your choice: ');
    const userChoiceLower = userChoice.toLowerCase();
    rl.close();
    playGame(userChoiceLower);
}

main();