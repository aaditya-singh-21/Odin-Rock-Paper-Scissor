const options = ["rock", "paper", "scissor"];

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
            return "Player Wins!"
    }
    else{
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