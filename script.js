const options = ["rock", "paper", "scissor"];

let playercount = 0;
let computercount = 0;

// Taking the computer input
function getComputerchoice(){
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
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

// taking user input
function getHumanchoice(){
    let validinput = false;

    while(validinput == false){
        let choice = prompt("Enter Rock, paper or scissor");
        if(choice == null){
            continue;
        }
        let playerchoice = choice.toLowerCase();
        if(options.includes(playerchoice)){
            validinput = true;
            return playerchoice;
        }
    }
}
for (let i = 1; i <= 5; i++) {
    alert(`Round ${i}`);
    let human = getHumanchoice();
    if (human === null) break; // Exit the game if user cancels
    let comp = getComputerchoice();

    let result = checkwinner(human, comp);
    console.log(`Player chose: ${human}`);
    console.log(`Computer chose: ${comp}`);
    console.log(result);

    alert(`Player chose: ${human}\nComputer chose: ${comp}\n${result}`);
}

if(playercount > computercount){
    console.log("Player Won!" + playercount + " - " + computercount);
} else if(computercount > playercount){
    console.log("Computer Won!"  + playercount + " - " + computercount);
} else{
    console.log("It's a draw!" + playercount + " - " + computercount);
}