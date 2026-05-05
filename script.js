const display = document.querySelector('#display');

let firstNum = null;
let secondNum = null;
let operator = null;
let toDisplay = null;
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
        default: return 'NO';
    }

  
}

function getNum(){
    let numbers = document.querySelector('#number');


    numbers.addEventListener('click', (event) => {


        if (event.target == event.currentTarget) return


        if (!operator){
                    
            if(!firstNum){
                firstNum = event.target.id;
            }
            else if(firstNum){
                firstNum += event.target.id;
            }
        }else{
            if(!secondNum){
                secondNum = event.target.id;
            }
            else if(secondNum){
                secondNum += event.target.id;
            }

        }

        if (!toDisplay) {
            toDisplay = event.target.id
        }else{
            toDisplay += event.target.id;
        }

        display.placeholder = toDisplay;
    
    })

    // toDisplay += firstNum;
    // display.placeholder = toDisplay
}

//add number to the second variable if there are still no operator

function getOperator(){
    let operatorArea = document.querySelector('#operators');

    operatorArea.addEventListener('click', (event) => {
        if (event.target == event.currentTarget) return
        let clickedOperator = event.target.id;

  

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
            case 'equals':
                result = operate(firstNum,secondNum,operator);
                toDisplay = result;
                firstNum = result;
                secondNum = 0;
                break;
            case 'clear':
                
                break;
        }

        if(event.target.id != 'equals') toDisplay+= operator;  
        display.placeholder = toDisplay;
    })
}
//operator function: what should it include?
//operator that change the variable and add it to the screen;
//if = is clicked use the function needed



getOperator();
getNum();

