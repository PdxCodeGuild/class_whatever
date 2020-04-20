
/*going to use a class to make the calculaor work! Constructor time, which will take all of the inputs and functions*/
class Calculator{ /*needs to know where to put the display text! text! */
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement 
        /**set variables for the class */
        this.currentOperandTextElement = currentOperandTextElement
        /**for the current operand element as well! */
        /**now we have to think about the operations our calculator class can perform */
    } 
    /**clear everything */
    clear(){
        this.currentOperand = '' /**empty string if they clear it */
        this.previousOperand = '' /**empty the previous inputs */
        this.operation = undefined /**no operation selected if we clear! yeah! */
    }
    /**delete a single number */
    delete(){

    }
    /**everytime you push a number, it adds the number to the screen! */
    appendNumber(number) {
        this.currentOperand = number
    }
    /**takes in the operation input, happens anytime a user clicks on an operation */
    chooseOperation(operation) {

    }
    /**'executes' the math for the single value */
    compute() {

    }
    /**this updates the display */
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
    }
}


/* selections galore!  this is how we specify specific buttons baby!*/
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

/**hook up the variables! make them work with our object*/
/**first thing, create a calculator! to create a class we type **NEW** followed by the class name, then we pass everyting from our constructor into IT  */
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

/**BEYOND FUCKING FRUSTRATED*/
/** MOVING ON TO ANOTHER PROJECT */
/** GIVING UP ON THIS ONE */
numberButtons.forEach(button => { 
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)TypeError: Cannot set property 'innerText' of null
    at Calculator.updateDisplay (simplecalcuator.js:35)
    at HTMLButtonElement.<anonymous> (simplecalcuator.js:59)
