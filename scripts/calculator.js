//Addition calculator | Andela | Fiyin Adebayo
//Implemented using Object Literals Pattern
//One-on-One Session with Prosper
//27th November, 2014

//How should it work?

//Take the first number
//validate input
//store it in a variable.

//Take the second number
//validate input
//store it in a variable.

//create function to validate input
//create a 'Add' function to perfom the addition operation.

//display output in a box.
//display validation errors in same box.

//reset and clear the screen


//create an object to contain the whole script.

var addCalculator = {
  firstNumber: document.getElementById("firstNumber"),
  secondNumber: document.getElementById("secondNumber"),
  answerBox: document.getElementById("answer"),
  commentsBox: document.getElementById("inlineComments"),
  submitButton: document.getElementById("submit"),
  resetButton: document.getElementById("reset"),
  add: function (number1, number2) {
         var addAnswer = parseInt(number1, 10) + parseInt(number2, 10);
         return addAnswer;
       },
  answer: function () {
            //validate input
            if (firstNumber.value === "" || secondNumber.value === "" || isNaN(firstNumber.value) || isNaN(secondNumber.value)) {
              addCalculator.showComments("Please enter a valid number!");              
            }
            else {
              var yourAnswer = addCalculator.add(firstNumber.value, secondNumber.value);
              addCalculator.showResult(yourAnswer);
              addCalculator.showComments("Click 'Reset' to add again");
            }
          },
  showResult: function (status) {
                var result = document.getElementById("answer");
                result.value = result.value + status;
              },
  showComments: function (comments) {
                  addCalculator.commentsBox.innerHTML = comments;
                }, 
  reset: function () {
           addCalculator.firstNumber.value = "";
           addCalculator.secondNumber.value = "";
           addCalculator.answerBox.value = "";
           addCalculator.showComments("");
         }
};

addCalculator.submitButton.addEventListener('click', addCalculator.answer);
addCalculator.resetButton.addEventListener('click', addCalculator.reset);