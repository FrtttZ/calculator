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

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    
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
function resetAfterCalculation(){
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
            // case 'equals':
            //     result = operate(firstNum,secondNum,operator);
            //     firstNum = result;
  
            
            //     secondNum = '';
                
            //     operator = '';

            //     firstNumDisplay.placeholder = firstNum;
            //     secondNumDisplay.placeholder = secondNum;

                
            //     break;
            case 'clear':
                toDisplay = '';
                firstNum = 0;
                secondNum = 0;
                operator = ''
                console.log('work');
                firstNum = null;
                secondNum = null;
                operator = null;
                toDisplay = '';

                break;
        }
        toDisplay = '';
        operatorDisplay.placeholder = operator;

    })

}
//operator function: what should it include?
//operator that change the variable and add it to the screen;
//if = is clicked use the function needed

getOperator();
getNum();


// function runCalcultor(){
    
// }





//initially run in first display
//if operator is selected
//pass seonc display as argument.