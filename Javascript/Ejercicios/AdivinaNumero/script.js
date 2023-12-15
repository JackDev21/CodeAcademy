let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    let randomNumber = Math.floor(Math.random() * 10)
    return randomNumber
}

const compareGuesses = (user, computer, target) => {
    if (user === computer) {
        return true
    } else if (target === user && user > computer) {
        return true
    } else if (target > user && user > computer) {
        return true
    } else if (target < user && user > computer) {
        return true
    } else {
        return false
    }
}


const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore += 1
    } else if (winner === 'computer') {
        computerScore += 1
    }
}


const advanceRound = () => {
    currentRoundNumber += 1
}




