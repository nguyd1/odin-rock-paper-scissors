function computerPlay(){
    let rand=Math.floor(Math.random()*(3));
    if(rand===0) return "rock";
    else if(rand===1) return "paper";
    else return "scissors";
}

function playRound(playerSelection, computerSelection){
    playerSelection=playerSelection.toLowerCase();

    if(playerSelection==="rock" && computerSelection==="rock") return "tie";
    else if(playerSelection==="rock" && computerSelection==="paper") return "lose";
    else if(playerSelection==="rock" && computerSelection==="scissors") return "win";

    else if(playerSelection==="paper" && computerSelection==="rock") return "win";
    else if(playerSelection==="paper" && computerSelection==="paper") return "tie";
    else if(playerSelection==="paper" && computerSelection==="scissors") return "lose";

    else if(playerSelection==="scissors" && computerSelection==="rock") return "lose";
    else if(playerSelection==="scissors" && computerSelection==="paper") return "win";
    else return "tie";
}

function game(playerScore,computerScore){
    for(let i=0;i<5;i++){
        let playerSelection=prompt("Input rock||paper||scissors");
        let computerSelection=computerPlay();
        let res=playRound(playerSelection,computerSelection);
        if(res==="win") obj1.playerScore++;
        else if(res==="lose") obj2.computerScore++;
        console.log(res);
    }
}

let obj1={playerScore:0};
let obj2={computerScore:0};
game(obj1.playerScore,obj2.computerScore);
if(obj1.playerScore>obj2.computerScore) console.log("final: player wins");
else if(obj1.playerScore<obj2.computerScore) console.log("final: computer wins")
else console.log("final: tie");