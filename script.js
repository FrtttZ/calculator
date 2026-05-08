let display = document.querySelector('#display');
let decimal = document.getElementById('.')
let backspace = document.getElementById('backspace')

let firstNum = '';
let secondNum = '';
let operator = '';
let toDisplay = '';
let result = '';
const hasOperator = /[-/*+]/
let hasDecimal = false;


function add(num1, num2){
    return num1 + num2;
}   

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(num1, num2, op){

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    let result;
    switch(op){
        case '+': result = add(num1, num2); break;
        case '-': result = subtract(num1, num2); break;
        case '*': result = multiply(num1, num2); break;
        case '/': result = divide(num1, num2); break;
        default: result = op;
    }

    return `${Math.round(result * 100) / 100}`
}
function resetAfterCalculation(){
    firstNum = '';
    secondNum = '';
    operator = '';
    result = ''     
    hasDecimal = false;

}

function updateDisplay(){
    if (!result){
        toDisplay = `${firstNum} ${operator} ${secondNum}`
    }
    else{
        toDisplay = `${result}`;
    }
    
    display.value = toDisplay;
}

function useBackspace(){
    if(!operator){
        firstNum = firstNum.slice(0, secondNum.length-1);
    }else if(operator && secondNum){
        secondNum = secondNum.slice(0, secondNum.length-1);
    }else{
        operator = '';
    }

    updateDisplay();

}



function getNum(){
    let numbers = document.querySelector('#number');

    numbers.addEventListener('click', (event) => {

        let numberClicked = event.target.id;
        if (event.target == event.currentTarget) return
        
        if(numberClicked == '.') hasDecimal = true;
        decimal.disabled = hasDecimal;



        if (!toDisplay) {
            toDisplay = numberClicked;
        }else{
            toDisplay += numberClicked;
        }
  

        if (!operator){
            
            if(!firstNum){
                firstNum = numberClicked;
                
            }
            else if(firstNum){
                firstNum += numberClicked;
                
            }

        }else{
            if(!secondNum){
                secondNum = numberClicked;
            }
            else if(secondNum){
                secondNum += numberClicked;
            }
        }
        updateDisplay();

                
    
    })
    
}





function getOperator(){
    let operatorArea = document.querySelector('#operators');

    let tempResult = null
    operatorArea.addEventListener('click', (event) => {
        if (event.target == event.currentTarget) return
        let clickedOperator = event.target.id;

        hasDecimal = false;
        decimal.disabled = hasDecimal

        if(clickedOperator =='backspace') {
            useBackspace(); return;
        }

        if((operator && clickedOperator != 'clear') || clickedOperator == 'equals'){
            if(!secondNum){
                operator = clickedOperator;
                updateDisplay();
            }else{
                result = operate(firstNum,secondNum,operator);
                toDisplay = result
                display.value = toDisplay;
                tempResult  = result;
                resetAfterCalculation();
                if(clickedOperator == 'equals') return;
            }

        }


        //If operator is clicked


        //assign result to firstNum if an operator is clicked after calculation
        if(!firstNum && clickedOperator != 'equals'){

            if(tempResult) firstNum = tempResult;
            else return;
        }


        switch(clickedOperator){
            case 'plus':
                operator = '+';
                break;
            case 'minus':
                operator = '-';
                break;
            case 'multiply':
                operator = '*';
                break;
            case 'divide':
                operator = '/';
                break;
            case 'clear':
                resetAfterCalculation();
                updateDisplay();
                break;
        }
        updateDisplay();
    })

}



getOperator();
getNum();