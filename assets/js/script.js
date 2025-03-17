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
                alert(`You clicked ${gameType} button` )
            }
        })
    }
})

/** The main function is loaded and 
 * it call to runGame that generate two random numbers  */

function runGame() {
    num1=Math.floor(Math.random()*25) +1;
    num2= Math.floor(Math.random()*25) + 1;

}



function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displayMultiplicationQuestion() {

}

function displaySubstractQuestion() {

}