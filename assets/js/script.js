/*   JavaScript code here  */
console.log("connected");

document.addEventListener("DOMContentLoaded", function() {
    buttons= document.getElementsByTagName("button"); 

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type")==="submit") {
                // alert("You clicked submit button!")
                checkAnswer();
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
    } else if (gameType==="multiply") {
        displayMultiplicationQuestion(num1, num2);
    } else if (gameType==="subtract") {
        displaySubstractQuestion(num1, num2);
    }
    
    else {
        // alert("You selected wrong game question");
        throw `unknown game type ${gameType}! Game is Aborting`;
    }


}



function checkAnswer() {
    let useranswer= parseInt(document.getElementById("answer-box").value);
   let correctAnswer=calculateCorrectAnswer();
   iscorrect = useranswer === correctAnswer[0]
   if(iscorrect) {
    alert(`Yes you got write answer ${correctAnswer[0]} :D`);
    incrementScore()

   } else {
    alert(`Oops! Your answer is ${useranswer}!. But the right answer is ${correctAnswer[0]}`);
    incrementWrongAnswer()
   }
   runGame(calculateCorrectAnswer[1]);
}

function calculateCorrectAnswer() {
    let operand1= parseInt(document.getElementById("operand1").innerText)
    let operand2= parseInt(document.getElementById("operand2").innerText)
    let operator= document.getElementById("operator").innerText;
    
    if(operator === "+") {
        return ([operand1 + operand2, "addition"])
    } else if (operator === "x") {
        console.log("I am returning operator");
        return([operand1 * operand2, "multiply"])
    }  else if (operator === "-") {
            return([operand1-operand2, "subtract"])

        }

    else {
        alert("You selected wrong game question");
        throw `unknown game type ${operator}! Game is Aborting`;
    }

}

function incrementScore() {
    let correctAnswers= document.getElementById("correct").innerText;
    document.getElementById("correct").innerText= ++correctAnswers;

}

function incrementWrongAnswer() {
    let wrongAnswers= document.getElementById("incorrect").innerText;
    document.getElementById("incorrect").innerText= ++wrongAnswers;

}

function displayAdditionQuestion(operand1, operand2) {
    console.log(operand1, operand2)
    document.getElementById("operand1").textContent= operand1;
    document.getElementById("operand2").textContent= operand2;
    document.getElementById("operator").textContent = "+";

}

function displayMultiplicationQuestion(operand1, operand2) {
    console.log("I am ok in display multiplication");
    document.getElementById("operand1").textContent= operand1;
    document.getElementById("operand2").textContent= operand2;
    document.getElementById("operator").textContent = "x";

}

function displaySubstractQuestion(operand1, operand2) {
    
    document.getElementById("operand1").textContent= operand1 > operand2 ? operand1: operand2
    document.getElementById("operand2").textContent= operand1 > operand2 ? operand2: operand1
    document.getElementById("operator").textContent = "-";

}