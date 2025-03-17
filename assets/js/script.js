/*   JavaScript code here  */
console.log("connected");

document.addEventListener("DOMContentLoaded", function() {
    buttons= document.getElementsByTagName("button"); 

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type")==="submit") {
                alert("You clicked submit button!")
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }
    runGame("addition");
})

/** The main function is loaded and 
 * it call to runGame that generate two random numbers  */

function runGame(gameType) {
    num1=Math.floor(Math.random()*25) +1;
    num2= Math.floor(Math.random()*25) + 1;

    if(gameType==="addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert("You selected wrong game question");
        throw `unknown game type ${gameType}! Game is Aborting`;
    }


}



function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    console.log(operand1, operand2)
    document.getElementById("operand1").textContent= operand1;
    document.getElementById("operand2").textContent= operand2;
    document.getElementById("operator").textContent = "+";

}

function displayMultiplicationQuestion() {

}

function displaySubstractQuestion() {

}