// Initialize variables to keep track of the game state
let roundsPlayed = 0;
let huScore = 0;
let pcScore = 0;

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

    // Determine winner and update scores
    if(huChoice === coChoice) {
        document.getElementById("winner").textContent = "This round is draw";
    } else if((huChoice === "Rock" && coChoice === "Scissors") ||
              (huChoice === "Paper" && coChoice === "Rock") ||
              (huChoice === "Scissors" && coChoice === "Paper")) {
        huScore++;
        document.getElementById("winner").textContent = "This round winner is human";
    } else {
        pcScore++;
        document.getElementById("winner").textContent = "This round winner is computer";
    }

    // Check if game over and declare overall winner
    if (roundsPlayed === 5) {
        if (huScore > pcScore) {
            document.getElementById("winner").textContent = "CONGRATS HUMAN BEAT COMPUTER!!!";
        } else if (huScore < pcScore) {
            document.getElementById("winner").textContent = "CONGRATS COMPUTER BEAT HUMAN!!!";
        } else {
            document.getElementById("winner").textContent = "THE GAME END IN A TIE";
        }

        // Disable buttons after game over
        const buttons = document.querySelectorAll(".button");
        buttons.forEach((button) => (button.disabled = true));
    }

    // Update displayed scores
    document.getElementById("myScore").textContent = "Human - " + huScore;
    document.getElementById("computerScore").textContent = "Computer - " + pcScore;
}
