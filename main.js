// Rock, Paper, Scissors Game - Code Overview

// What's the game plan?
// 1. We start the game with zero rounds played and zero scores for both human and computer.
// 2. We show clickable buttons for Rock, Paper, and Scissors.
// 3. When the page loads, we get the buttons ready for clicks.
// 4. If someone clicks a button, we remember what the human chose and also let the computer make a random choice.
// 5. We announce the choices on the screen.
// 6. We compare the choices to decide who wins the round and update the scores.
// 7. After 5 rounds, we announce the overall winner and disable the buttons.

// More Detailed Steps
// 1. Create variables to keep track of rounds played, human score, and computer score.
// 2. Wait for the web page to be ready.
// 3. Find all the buttons on the page.
// 4. When a button is clicked:
//   - Remember what the human clicked.
//   - Make the computer pick randomly.
//   - Show both choices on the screen.
//   - Go to the function to figure out who won the round.
// 5. To decide who won the round:
//   - Check if it's a draw.
//   - Or check if the human won.
//   - Or the computer wins by default.
//   - Update the round and scores.
// 6. After 5 rounds, announce the overall winner.
// 7. Stop the game by making buttons unclickable.
// 8. Show the final scores on the screen.

let roundsPlayed = 0;
let huScore = 0;
let pcScore = 0;
let coChoice = coPick();
let huChoice = huPick();


function coPick(){
    let num = Math.floor(Math.random()*3);

    switch (num) {
        case 0: return "Rock";
        case 1: return "Paper";
        default: return "Scissors";
      }
}


document.addEventListener("DOMContentLoaded", () => {huPick();});
function huPick(){
    const buttons = document.querySelectorAll(".button");
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", (event) => {
            let buttonContent = event.target.textContent;
            let huChoice = buttonContent;
            let coChoice = coPick();
            document.getElementById("pcPick").textContent = "Computer pick: " + coChoice;
            document.getElementById("myPick").textContent = "My pick: " + huChoice;
            roundOne(huChoice, coChoice);
        })
    }
}


function roundOne(huChoice, coChoice) {
    roundsPlayed++;
    
    if(huChoice === "Rock" && coChoice === "Rock" ||
        huChoice === "Paper" && coChoice === "Paper" ||
        huChoice === "Scissors" && coChoice === "Scissors") {
          document.getElementById("winner").textContent = "This round is draw";

        
    } else if(huChoice === "Rock" && coChoice === "Scissors" ||
        huChoice === "Paper" && coChoice === "Rock" ||
        huChoice === "Scissors" && coChoice === "Paper") {
        huScore++;
        document.getElementById("winner").textContent = "This round winner is human";

        
    } else {
        pcScore++;
        document.getElementById("winner").textContent = "This round winner is computer";
        
    }

    if (roundsPlayed === 5) {
      
      if (huScore > pcScore) {
          document.getElementById("winner").textContent = "CONGRATS HUMAN BEAT COMPUTER!!!";
      } else if (huScore < pcScore) {
          document.getElementById("winner").textContent = "CONGRATS COMPUTER BEAT HUMAN!!!";
      } else if (huScore === pcScore) {
          document.getElementById("winner").textContent = "THE GAME END IN A TIE";
      }
      
      const buttons = document.querySelectorAll(".button");
      buttons.forEach((button) => (button.disabled = true));
  }
    
    document.getElementById("myScore").textContent = "Human - " + huScore;
    document.getElementById("computerScore").textContent = "Computer - " + pcScore;    
}
