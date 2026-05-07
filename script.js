let display = document.querySelector('#display');


let firstNum = '';
let secondNum = '';
let operator = '';
let toDisplay = '';
let result = ''


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
    
    switch(op){
        case '+': return add(num1, num2); break;
        case '-': return subtract(num1, num2); break;
        case '*': return multiply(num1, num2); break;
        case '/': return divide(num1, num2); break;
        default: return op;
    }
}

function getNum(){
    let numbers = document.querySelector('#number');
    numbers.addEventListener('click', (event) => {

        let numberClicked = event.target.id;
        if (event.target == event.currentTarget) return

        if (!toDisplay) {
            toDisplay = numberClicked;
        }
    
        else{
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
//reset num
// if nu1m is empty result += second num
function resetAfterCalculation(){
    firstNum = '';
    secondNum = '';
    operator = '';
    // toDisplay = '';
    result = ''     

}

function updateDisplay(){
    

    if (!result){
        toDisplay = `${firstNum}${operator}${secondNum}${result}`
    }
    else{
        toDisplay = result;
    }
    
    display.placeholder = toDisplay;
}



function getOperator(){
    let operatorArea = document.querySelector('#operators');

    operatorArea.addEventListener('click', (event) => {
        if (event.target == event.currentTarget) return
        let clickedOperator = event.target.id;
  




        if((operator && secondNum ) || clickedOperator == 'equals'){
            result = operate(firstNum, secondNum, operator);
            tempResult = result
            updateDisplay();
            resetAfterCalculation();
        }

        if(!firstNum && clickedOperator != 'equals'){
            console.log('c');

            console.log(firstNum);
            firstNum = tempResult;
            console.log(firstNum);
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
        toDisplay += operator;
        display.placeholder = toDisplay;

    })

}

getOperator();
getNum();