
let fullOperation = '';
let screen = document.getElementById("operation");
let history = document.querySelector(".hist")
let arrayResultados = [];


function addNumber(number) {

  let op = fullOperation.split('');
  if (op.includes('+') && number.toString() === '+') return;
  if (op.includes("X") && number.toString() === "X") return; 
  if (op.includes("-") && number.toString() === "-") return; 


  if(number === "="){
    calculate();
    showData();
    return;
  }


  fullOperation = fullOperation + number.toString();



  showNumber();
}


  function showNumber() {
  screen.innerHTML = fullOperation;
}

function calculate() {
    let op = fullOperation.split("");
    if(op.includes("+")){
        let number = fullOperation.split('+');
        let result = Number(number[0]) + Number(number[1]);
        fullOperation = "";
        screen.innerHTML = result;
        hist("+", number, result);
      

    }else if(op.includes("X")){
        let number = fullOperation.split('X');
        let result = Number(number[0]) * Number(number[1]);
        fullOperation = "";
        screen.innerHTML = result;
        
        hist("X", number, result);

    }else if(op.includes("-")){
        let number = fullOperation.split('-');
        let result = Number(number[0]) - Number(number[1]);
        fullOperation = "";
        screen.innerHTML = result;
        
        hist("-", number, result);

    }else{
        let number = fullOperation.split('^');
        let result = Number(number[0]) ** Number(number[1]);
        fullOperation = "";
        screen.innerHTML = result;
      
        hist("^", number, result);
    }
    
}

function clearAll(){
    fullOperation = "";
    screen.innerHTML = "";
    arrayResultados = [];
    history.innerHTML = "";

}


function hist(operation, number, result){
    arrayResultados.push(`${number[0]} ${operation} ${number[1]} = ${result}`);

    console.log(arrayResultados)
}

function showData(){
    let p = document.createElement("p");
    p.classList.add("hist_main");
    
    arrayResultados.forEach(element => {
        history.appendChild(p);
        p.innerHTML = element;

    })
   
}