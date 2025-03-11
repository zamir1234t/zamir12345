// const pg =document.getElementById("pg")

// function changtext() {
// document.getElementById("pg").textContent="sorry" 
// }

// function myFunction() {
//   const element = document.body;
//   element.classList.toggle("dark-mode");
// }


let currentInput = '' 
function appendNumber(person) {
    currentInput += person
    document.getElementById('result').value = currentInput
}

function appendOperator(Number) {
    currentInput += ' ' + Number + ' '
    document.getElementById('result').value=currentInput
}

function learScreen() {
    currentInput = ' '
    document.getElementById('result').value= ' '
}

function clearInterval() {
    currentInput =currentInput.slice(0,-1)
    document.getElementById('result').value =currentInput
}

function calculate() {
    try{
        currentInput = eval(currentInput).toString()
        document.getElementById('result').value = currentInput
    }catch{
        document.getElementById('result').value ='ты на приколе?'
    }
}