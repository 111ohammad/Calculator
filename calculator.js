
class Calculator {
    constructor() {
      this.result = document.getElementById("result");
      this.clearButton = document.querySelector(".calculator button:nth-        child(2)");
      this.equalButton = document.querySelector(".calculator button:nth-child(21)");
      this.expression = "";
    }
  
    addToExpression(value) {
      this.expression += value;
      this.result.value = this.expression;
    }
  
    clearExpression() {
      this.expression = "";
      this.result.value = "";
    }
  
    calculateExpression() {
      try {
        let answer = eval(this.expression);
        this.result.value = answer;
        this.expression = answer.toString();
      } catch (error) {
        this.result.value = "Error";
        this.expression = "";
      }
    }
  
    addEventListeners() {
      let buttons = document.querySelectorAll(".calculator button");
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          let buttonValue = button.textContent;
          if (buttonValue === "C") {
            this.clearExpression();
          } else if (buttonValue === "=") {
            this.calculateExpression();
          } else {
            this.addToExpression(buttonValue);
          }
        });
      });
    }
  }
  
  let calculator = new Calculator();
  calculator.addEventListeners();
  