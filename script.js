let firstNumDisplay = document.querySelector('#firstNum');
const operatorDisplay = document.querySelector('#operator');
const secondNumDisplay = document.querySelector('#secondNum');

let firstNum = '';
let secondNum = '';
let operator = '';
let toDisplay = '';
let result = null


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
    if (!operator){

        firstNum = '';  
    }


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

        firstNumDisplay.placeholder = toDisplay;
    }else{
        if(!secondNum){
            secondNum = numberClicked;
        }
        else if(secondNum){
            secondNum += numberClicked;
        }
        secondNumDisplay.placeholder = toDisplay;

    }
    
    
    })

}
function resetAfterCalculation(resetFirstNum=false){
    if (resetFirstNum) firstNum = '';
    secondNum = '';
    operator = '';
    toDisplay = '';
    result = ''
    operatorDisplay.placeholder = operator;
    secondNumDisplay.placeholder = secondNum;
}

function getOperator(){
    let operatorArea = document.querySelector('#operators');

    operatorArea.addEventListener('click', (event) => {
        if (event.target == event.currentTarget) return
        let clickedOperator = event.target.id;
  

        if(clickedOperator == 'equals' && (!firstNum || !secondNum)) return
        if((operator && secondNum ) || clickedOperator == 'equals'){
            result = operate(firstNum,secondNum,operator);
            toDisplay = Math.round(result * 100) / 100
            firstNum = result;
            firstNumDisplay.placeholder = toDisplay;
            
            resetAfterCalculation();

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
                resetAfterCalculation(true);
                firstNumDisplay.placeholder ='';
                secondNumDisplay.placeholder = '';

                break;
        }
        toDisplay = '';
        operatorDisplay.placeholder = operator;

    })

}

getOperator();
getNum();