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