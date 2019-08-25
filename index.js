let i = 0;
const getNumber = (num)=>{
let inputVar = document.getElementById('input');
    switch (num) {
        case 1:
            inputVar.value += '1';
            break;
    
        
    }
    switch (num) {
        case 2:
            inputVar.value += '2';
            break;
    
        
    } switch (num) {
        case 3:
            inputVar.value += '3';
            break;
    
        
    } switch (num) {
        case 4:
            inputVar.value += '4';
            break;
    
        
    } switch (num) {
        case 5:
            inputVar.value += '5';
            break;
    
        
    } switch (num) {
        case 6:
            inputVar.value += '6';
            break;
    
        
    } switch (num) {
        case 7:
            inputVar.value += '7';
            break;
    
        
    } switch (num) {
        case 8:
            inputVar.value += '8';
            break;
    
        
    } switch (num) {
        case 9:
            inputVar.value += '9';
            break;
    
        
    } switch (num) {
        case 0:
            inputVar.value += '0';
            break;

           
    }  
}

const getOperand =(operand)=>{
    let inputVar =document.getElementById('input')
    switch (operand) {
        case '+':
            inputVar.value += '+'
            break;
    
    } switch (operand) {
        case '-':
            inputVar.value += '-'
            break;
    
    } switch (operand) {
        case '*':
            inputVar.value += '*'
            break;
    
    } switch (operand) {
        case '/':
            inputVar.value += '/'
            break;
    
    }
    switch (operand) {
        case '+/-':
            inputVar.value += '-' + inputVar.value
            break;
    
    }
}

const clearScreen= ()=>{
    document.getElementById('input').value = '';
    document.getElementById('answer').value = '';
}

const backSpace =() =>{
    let inputVar =document.getElementById('input')
    let x = inputVar.value
    if (x.length > 0) {
        x = x.substring(0, x.length-1)
        inputVar.value = x;
    }
}
const bracket =()=>{
    let inputVar =document.getElementById('input')
    if (i ==0) {
        inputVar.value += '(';
        i = 1
    } else if (i == 1) {
        inputVar.value +=')'
        i = 0
    } 
}
const compute =()=>{
    let inputVar =document.getElementById('input')
    ans  = Math.floor(+eval(inputVar.value));
   document.getElementById('answer').value = '=' + ans;
}
