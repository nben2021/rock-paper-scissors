
let huScore = 0;
let pcScore = 0;
let coChoice = coPick();
let huChoice = huPick();


//step 1: found computer choice
function coPick(){
    let num = Math.floor(Math.random()*3);

    if(num === 0) {
        return "Rock";
    }

    else if(num === 1){
        return "Paper";
    }

    else{
        return "Scissors";
    }
    
}



//End 


//step 2: found human choice
//0. Setup DOMContentLoaded
//1. connect js with html button(all of them)
//*tools I can use to solve for step one:
//  - getElementById
//  - querySelector or querySelectorAll
//2. give each js button a listen tool that listen to user click 
//*tools I can use to solve for step two:
//  - addEventListenr("click,")
//  -
//3. if a user click then record user button string to a variable 
//4. Print human pick
//5. Print computer pick

document.addEventListener("DOMContentLoaded", () => {huPick();});
function huPick(){
const buttons = document.querySelectorAll(".button");
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", (event) => {
        let buttonContent = event.target.textContent;
        let huChoice = buttonContent;
        let coChoice = coPick();
        console.log("You pick:",huChoice);
        console.log("Computer pick:",coChoice);
        roundOne(huChoice,coChoice);

        
    })
}
}

//step 3:Create an algorithim Human win or lose
//1. Create a function for this, lets call it roundOne
//2. give this function, huChoice & coChoice
//*tools I can use to solve for step 2:
//  - create a var/let/const for the function huChoice & coChoice
//3. Give result who win or lose by if, else if, and else
//4. if = draw. => Use AND && and OR ||
//5. if else = human win
//6. else = human lose 
//7. then add the algo to main step 2(DONE)


function roundOne(huChoice,coChoice) {


    if(huChoice === "Rock" && coChoice === "Rock" ||
    huChoice === "Paper" && coChoice === "Paper"  ||
    huChoice === "Scissors" && coChoice === "Scissors"
      ){
        console.log("Draw.");
        alert("Draw.");
        //give score later below
        //score no change 0-0
      } else if(huChoice === "Rock" && coChoice === "Scissors" ||
      huChoice === "Paper" && coChoice === "Rock"  ||
      huChoice === "Scissors" && coChoice === "Paper"){
        console.log("Human win.");
        alert("You win");
        huScore++;
        //give score later below
        //score ++1 human
      } else {
        console.log("Computer win.")
        pcScore++;
        alert("You lose");
        //give score later below
        //score ++1 computer
      }

      document.getElementById("myScore").textContent = "Me:" + huScore;
      document.getElementById("computerScore").textContent = "Computer:" + pcScore;    
}



