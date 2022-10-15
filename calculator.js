//create functions for each operation: add, subtract, multiply and divide 
console.log("hey")

const button = document.getElementById("equals-button")


//helper functions
function add(num1, num2){
    return num1 + num2
  }
  
  function subtract(num1, num2){
    return num1 - num2
  }
  
  function multiply(num1, num2){
    return num1 * num2
  }
  function divide(num1, num2){
    return num1 / num2
  }
  
  //create a function named operate that takes in 3 parameters: 2 numbers and the operation to be performed 
  
  function operate(num1, num2, operator){
    operator = operator.toLowerCase()
    if(operator === 'add'){
      return add(num1, num2)
    }
    else if(operator === 'subtract'){
      return subtract(num1, num2)
    }
    else if(operator === 'multiply'){
      return multiply(num1, num2)
    }
    else if(operator === 'divide'){
      return divide(num1, num2)
    }
    else {
      return 'error operator not recognized'
    }
  }

  
function equalsClicked() {
  let numOne = document.getElementById("num1").value
  numOne = parseInt(numOne, 10)

  let numTwo = document.getElementById("num2").value
  numTwo = parseInt(numTwo, 10)

  const op = document.getElementById("operator").value

  let final = operate(numOne, numTwo, op)

  document.getElementById("result-num").textContent = final

  console.log(final)

}




