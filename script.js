const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const user_score = document.getElementById("humanScore")
const ai_score = document.getElementById("Aiscore")
const result = document.querySelector(".result")
let userScore = 0;
let computerScore = 0;
const rock1 = document.getElementById('rock1');
const paper1 = document.getElementById('paper1');
const scissor1 = document.getElementById('scissors1');

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function removeColor() {
    console.log("remove color");
    rock1.style.backgroundColor = "white";
}

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3 );
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    user_score.innerHTML = userScore;
    ai_score.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "computer".fontsize(3).sup();
    result.innerHTML = convertToWord(userChoice) + ` (${smallUserWord})  beats `  +convertToWord(computerChoice)+ ` (${smallCompWord}) . You win! `;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    user_score.innerHTML = userScore;
    ai_score.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "computer".fontsize(3).sup();
    result.innerHTML = convertToWord(userChoice) + ` (${smallCompWord})  loses `  +convertToWord(computerChoice)+ ` (${smallUserWord}) . You lost! `;;
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "computer".fontsize(3).sup();
    result.innerHTML = convertToWord(userChoice) + ` (${smallUserWord})  equals `  +convertToWord(computerChoice)+ ` (${smallCompWord}) . Its a draw! `;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs" :
        case "pr" :
        case "sp" :
            win(userChoice, computerChoice);
            break;
        case "rp" :
        case "ps" : 
        case "sr" :
            lose(userChoice, computerChoice);
            break;
        case "rr" :
        case "pp" :
        case "ss" :
            draw(userChoice, computerChoice);
            break;
    }
}
// game();

function main() {
    rock.addEventListener('click', function() {
        game("r");
        
    });

    paper.addEventListener('click', function() {
        game("p")
    });

    scissors.addEventListener('click', function() {
        game("s")
    });
}

main();