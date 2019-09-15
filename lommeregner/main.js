 
let button = document.querySelector("#btn");

console.log(tal1);

button.addEventListener("click", buttonClicked);

function buttonClicked() {
    let tal1 = parseInt(document.querySelector("#tal1").value);
    let tal2 = parseInt(document.querySelector("#tal2").value);
    let operator = document.querySelector("#operator").value;

udregn(tal1, tal2, operator);
}

function udregn(tal1, tal2, operator) {

    let result;

    if(operator == "+") {
        result = (tal1 + tal2);
    }
    else if(operator == "-") {
        result = (tal1 - tal2);
    }
    else if(operator == "/") {
        result = (tal1 / tal2); 
    } else {
        result = (tal1*tal2);
    }

    let elementResult = document.querySelector(".result");

    elementResult.innerHTML = result;
}




