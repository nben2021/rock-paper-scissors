// Initialize variables to keep track of the game state
let roundsPlayed = 0;
let huScore = 0;
let pcScore = 0;
let coChoice = coPick();
let huChoice = huPick();

// Function to randomly pick a choice for the computer
function coPick(){
    let num = Math.floor(Math.random()*3);
    switch (num) {
        case 0: return "Rock";
        case 1: return "Paper";
        default: return "Scissors";
    }
}

// Event listener to run huPick once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {huPick();});

// Function to capture human player's choice and initiate a game round
function huPick(){
    const buttons = document.querySelectorAll(".button");
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", (event) => {
            // Get choices for this round
            let buttonContent = event.target.textContent;
            let huChoice = event.target.textContent;
            let coChoice = coPick();
            
            // Display choices
            document.getElementById("pcPick").textContent = "Computer pick: " + coChoice;
            document.getElementById("myPick").textContent = "My pick: " + huChoice;

            // Execute a round of the game
            roundOne(huChoice, coChoice);
        })
    }
}

// Function to determine the winner of a single round and update scores
function roundOne(huChoice, coChoice) {
    roundsPlayed++;
    // Determine winner of round and update scores
    if(huChoice === "Rock" && coChoice === "Rock" ||
        huChoice === "Paper" && coChoice === "Paper" ||
        huChoice === "Scissors" && coChoice === "Scissors") {
          document.getElementById("winner").textContent = "This round is draw";

        // No score change for draw
    } else if(huChoice === "Rock" && coChoice === "Scissors" ||
        huChoice === "Paper" && coChoice === "Rock" ||
        huChoice === "Scissors" && coChoice === "Paper") {
        huScore++;
        document.getElementById("winner").textContent = "This round winner is human";

        // Increment human score for win
    } else {
        pcScore++;
        document.getElementById("winner").textContent = "This round winner is computer";
        // Increment computer score for win
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
    // Update score display
    document.getElementById("myScore").textContent = "Human - " + huScore;
    document.getElementById("computerScore").textContent = "Computer - " + pcScore;    
}
