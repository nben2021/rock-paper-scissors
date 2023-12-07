// Variables 
let roundsPlayed = 0;
let huScore = 0;
let pcScore = 0;
let coChoice = coPick();
let huChoice = huPick();

// Computer choice
function coPick(){
    let num = Math.floor(Math.random()*3);

    switch (num) {
        case 0: return "Rock";
        case 1: return "Paper";
        default: return "Scissors";
      }
}

// Human choice 
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

// Determine winner of each round
function roundOne(huChoice, coChoice) {
    roundsPlayed++;
    // Determine winner of round and update scores
    if(huChoice === "Rock" && coChoice === "Rock" ||
        huChoice === "Paper" && coChoice === "Paper" ||
        huChoice === "Scissors" && coChoice === "Scissors") {
          document.getElementById("winner").textContent = "This round is draw";

        // No score change if draw
    } else if(huChoice === "Rock" && coChoice === "Scissors" ||
        huChoice === "Paper" && coChoice === "Rock" ||
        huChoice === "Scissors" && coChoice === "Paper") {
        huScore++;
        document.getElementById("winner").textContent = "This round winner is human";

        // Increase human score if win
    } else {
        pcScore++;
        document.getElementById("winner").textContent = "This round winner is computer";
        // Increase human score if lose
    }

    if (roundsPlayed === 5) {
      // Determine winner of game and display message
      if (huScore > pcScore) {
          document.getElementById("winner").textContent = "CONGRATS HUMAN BEAT COMPUTER!!!";
      } else if (huScore < pcScore) {
          document.getElementById("winner").textContent = "CONGRATS COMPUTER BEAT HUMAN!!!";
      } else if (huScore === pcScore) {
          document.getElementById("winner").textContent = "THE GAME END IN A TIE";
      }
      // Disable buttons after game ends
      const buttons = document.querySelectorAll(".button");
      buttons.forEach((button) => (button.disabled = true));
  }
    // Update score 
    document.getElementById("myScore").textContent = "Human - " + huScore;
    document.getElementById("computerScore").textContent = "Computer - " + pcScore;    
}
