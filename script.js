const options = ["rock", "paper", "scissor"];

// Taking the computer input
function getComputerchoice(){
    let choice = options[Math.floor(Math.random() * options.length)];
    console.log(choice);
}

// checking for the winner
function checkwinner(playerchoice, computerchoice){
    if(playerchoice == computerchoice){
        return "Draw!"
    }
    else if((playerchoice == "rock" && computerchoice == "scissor" || playerchoice == "paper" && computerchoice == "rock" 
        || playerchoice == "scissor" && computerchoice == "paper")){
            return "Player"
    }
    else{
        return "Computer";
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

function DisplayOutput(result){
    console.log(result);
}

getComputerchoice();
getHumanchoice();

var result = checkwinner();

DisplayOutput(result);