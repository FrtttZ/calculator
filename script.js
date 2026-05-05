const display = document.querySelector('#display');

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
        default: console.log(op);
    }
}

function getNum(){
    let numbers = document.querySelector('#number');


    numbers.addEventListener('click', (event) => {
        let numberClicked = event.target.id;
        if (event.target == event.currentTarget) return


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

        if (!toDisplay) {
            toDisplay = numberClicked;
        }else{
            toDisplay += numberClicked;
        }

        display.placeholder = toDisplay;
    
    })

    // toDisplay += firstNum;
    // display.placeholder = toDisplay
}

function getOperator(){
    let operatorArea = document.querySelector('#operators');

    operatorArea.addEventListener('click', (event) => {
        if (event.target == event.currentTarget) return
        let clickedOperator = event.target.id;
  
        if(operator  || clickedOperator == 'equals'){
            result = operate(firstNum,secondNum,operator);
            toDisplay = Math.round(result * 100) / 100
            firstNum = result;
            secondNum = 0;
            operator ='';   
        
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
                toDisplay = '';
                firstNum = 0;
                secondNum = 0;
                operator = ''
                break;
        }

        if(clickedOperator != 'equals') toDisplay += operator;  
        display.placeholder = toDisplay;
        
    })

}
//operator function: what should it include?
//operator that change the variable and add it to the screen;
//if = is clicked use the function needed

getNum();
getOperator();


