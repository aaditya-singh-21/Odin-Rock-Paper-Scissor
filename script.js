const options = ["rock", "paper", "scissor"];

let playercount = 0;
let computercount = 0;
let round = 1;
const maxRounds = 5;

// DOM Elements
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const roundEl = document.getElementById('round');
const playerChoiceEl = document.getElementById('player-choice');
const computerChoiceEl = document.getElementById('computer-choice');
const resultMessageEl = document.getElementById('result-message');
const choiceBtns = document.querySelectorAll('.choice-btn');
const themeToggle = document.getElementById('theme-toggle');
const modeLabel = document.getElementById('mode-label');

// Taking the computer input
function getComputerchoice(){
    return options[Math.floor(Math.random() * options.length)];
}

// checking for the winner
function checkwinner(playerchoice, computerchoice){
    if(playerchoice == computerchoice){
        return "Draw!"
    }
    else if((playerchoice == "rock" && computerchoice == "scissor" || playerchoice == "paper" && computerchoice == "rock" 
        || playerchoice == "scissor" && computerchoice == "paper")){
            playercount++;
            return "Player Wins!"
    }
    else{
        computercount++;
        return "Computer Wins!";
    }
}

function updateUI(player, computer, result) {
    playerScoreEl.textContent = `Player: ${playercount}`;
    computerScoreEl.textContent = `Computer: ${computercount}`;
    playerChoiceEl.textContent = `Player chose: ${player}`;
    computerChoiceEl.textContent = `Computer chose: ${computer}`;
    resultMessageEl.textContent = result;
    roundEl.textContent = `Round ${round} / ${maxRounds}`;
}

function endGame() {
    let finalMsg = '';
    if (playercount > computercount) {
        finalMsg = `Player Won! ${playercount} - ${computercount}`;
    } else if (computercount > playercount) {
        finalMsg = `Computer Won! ${playercount} - ${computercount}`;
    } else {
        finalMsg = `It's a draw! ${playercount} - ${computercount}`;
    }
    resultMessageEl.textContent = finalMsg;
    choiceBtns.forEach(btn => btn.disabled = true);
    roundEl.textContent = `Game Over`;
}

function handleChoice(e) {
    if (round > maxRounds) return;
    const human = e.currentTarget.getAttribute('data-choice');
    const comp = getComputerchoice();
    const result = checkwinner(human, comp);
    updateUI(human, comp, result);
    round++;
    if (round > maxRounds) {
        setTimeout(endGame, 600);
    }
}

choiceBtns.forEach(btn => {
    btn.addEventListener('click', handleChoice);
});

// Theme toggle
function setTheme(isDark) {
    document.body.classList.toggle('dark', isDark);
    if (isDark) {
        modeLabel.innerHTML = '<span class="icon">☀️</span> Light Mode';
    } else {
        modeLabel.innerHTML = '<span class="icon">🌙</span> Dark Mode';
    }
}

themeToggle.addEventListener('change', (e) => {
    setTheme(e.target.checked);
    localStorage.setItem('rps-theme', e.target.checked ? 'dark' : 'light');
});

// On load, set theme from localStorage
(function () {
    const savedTheme = localStorage.getItem('rps-theme');
    if (savedTheme === 'dark') {
        themeToggle.checked = true;
        setTheme(true);
    } else {
        setTheme(false);
    }
})();

// Initial UI state
updateUI('-', '-', 'Make your move!');