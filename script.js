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

let playerScore=0;
let computerScore=0;

const container=document.querySelector(".container");

const result=document.createElement("div");
result.classList.add("result");
container.appendChild(result);
result.textContent="New Game";

const score=document.createElement("div");
score.classList.add("score");
container.appendChild(score);
score.textContent="0-0";

const gameOver=document.createElement("div");
gameOver.classList.add("gameOver");
container.appendChild(gameOver);
gameOver.textContent="";

const buttons=document.querySelectorAll("button");
buttons.forEach(button=>{
    button.addEventListener("click",function(e){
        gameOver.textContent="";

        let playerSelection=button.id;
        let computerSelection=computerPlay();

        console.log(playerSelection);
        console.log(computerSelection);

        let res=playRound(playerSelection,computerSelection);

        console.log(res);

        if(res=="win"){
            playerScore++;
            playerSelection=playerSelection.charAt(0).toUpperCase()+playerSelection.substr(1);
            computerSelection=computerSelection.charAt(0).toUpperCase()+computerSelection.substr(1);
            result.textContent=playerSelection+" wins "+computerSelection+". Player Wins.";
        }
        else if(res=="lose"){
            computerScore++;
            playerSelection=playerSelection.charAt(0).toUpperCase()+playerSelection.substr(1);
            computerSelection=computerSelection.charAt(0).toUpperCase()+computerSelection.substr(1);
            result.textContent=playerSelection+" loses "+computerSelection+". Computer Wins";
        }
        else{
            playerSelection=playerSelection.charAt(0).toUpperCase()+playerSelection.substr(1);
            computerSelection=computerSelection.charAt(0).toUpperCase()+computerSelection.substr(1);
            result.textContent=playerSelection+" ties "+computerSelection+". Tie.";
        }

        score.textContent=playerScore+"-"+computerScore;

        if(playerScore==5 || computerScore==5){
            gameOver.textContent="Game Over."
            playerScore=0;
            computerScore=0;
        }
    });
});