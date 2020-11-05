//variables
function startGame(yourChoice) {
    var humanChoice, botChoice, winner;
    humanChoice = yourChoice.id;
    botChoice = generateBotChoice();
    console.log(botChoice);
    winner = decideWinner(humanChoice, botChoice);
    console.log(winner);
    showWinner(humanChoice, botChoice, winner);
}

function generateBotChoice() {
    choice = Math.ceil(Math.random() * 3);
    if (choice === 1) {
        return "Rock";
    }
    if (choice === 2) {
        return "Paper";
    }
    if (choice === 3) {
        return "Scissors";
    }
}



function decideWinner(human, bot) {
    if (human == "Rock") {
        if (bot == "Scissors") {
            return { 'message': 'YOU WON', 'color': 'green' };
        }
        if (bot == "Rock") {
            return { 'message': 'TIE', 'color': 'blue' };
        }
        if (bot == "Scissorss") {
            return { 'message': 'YOU LOST', 'color': 'red' };
        }
    }
    if (human == "Paper") {
        if (bot == "Rock") {
            return { 'message': 'YOU WON', 'color': 'green' };
        }
        if (bot == "Paper") {
            return { 'message': 'TIE', 'color': 'blue' };
        }
        if (bot == "Scissors") {
            return { 'message': 'YOU LOST', 'color': 'red' };
        }
    }
    if (human == "Scissors") {
        if (bot == "Paper") {
            return { 'message': 'YOU WON', 'color': 'green' };
        }
        if (bot == "Scissors") {
            return { 'message': 'TIE', 'color': 'blue' };
        }
        if (bot == "Rock") {
            return { 'message': 'YOU LOST', 'color': 'red' };
        }
    }
}

function showWinner(humanChoice, botChoice, decideWinner) {
    document.getElementById('humanmove').innerHTML = "Your Move : " + humanChoice;
    document.getElementById('botmove').innerHTML = "Computer Move : " + botChoice;
    document.getElementById('result').innerHTML = decideWinner['message'];
    document.getElementById('result').style.color = decideWinner['color'];
}