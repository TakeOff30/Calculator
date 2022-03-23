//array to store 2 numbers and an operator
let operation = [];

let display = document.querySelector("#display");
let nmb = document.querySelectorAll(".number");
let ops = document.querySelectorAll(".operator");
let clear = document.querySelector(".clear");
let eql = document.querySelector(".equals");
let dot = document.querySelector(".dot");

//boolean variable to solve the result bug
let toClear = false;

//boolean variable to manage the dot
let insDot = true;

function add(a,b){

    return parseFloat(a) + parseFloat(b);
}

function subtract(a,b){

    return parseFloat(a) - parseFloat(b);
}

function multiply(a,b){

    return parseFloat(a) * parseFloat(b);
}

function divide(a,b){

    if(b == "0"){
        clearAll();
        alert("You can't divide by 0. Don't ever try to crash my calculator! :(");
    }else{
        return parseFloat(a) / parseFloat(b);
    }
    
}

function operate(n1,op,n2){

    if(op == "+"){

        n1 = add(n1,n2);

    }else if (op == "-") {

        n1 = subtract(n1,n2);

    }else if (op == "x") {

        n1 = multiply(n1,n2);

    }else if (op == ":") {

        n1 = (divide(n1,n2)).toFixed(2);

    }

    return n1;
}

function clearAll(){

    operation = [];
    display.textContent = "";

}

clear.addEventListener("click", clearAll);

function insertDot(){

    if(insDot){

        display.textContent += ".";
        insDot = false;  

    }

}

dot.addEventListener("click", insertDot);

//number typing on display
for (let i = 0; i < nmb.length; i++) {

    nmb[i].addEventListener("click", function(){

        if(toClear == false){

            display.textContent = display.textContent + nmb[i].textContent;

        }else{

            display.textContent = "";
            display.textContent = display.textContent + nmb[i].textContent;
            toClear = false;

        }
        
    });
}

function equals(){

    if(operation[0] !== undefined){
        
        operation[2] = display.textContent;
        display.textContent = operate(operation[0],operation[1],operation[2]);
        operation[0] = undefined;
        operation[1] = undefined;
        operation[2] = undefined;
        toClear = true;
        insDot = true;

    }
}

eql.addEventListener("click", equals);