let button = document.querySelector("#submit");

button.addEventListener("click", skat);

function skat() {
    let name = document.querySelector("#name");
    let lastName = document.querySelector("#lastname");
    let salary = parseInt(document.querySelector("#salary").value);
    let region = document.querySelector("#region");
    let procent;
    let procentDecimal;
    let result;

    if(region.value == "Region Nordjylland") {
        procent = "39%";
        procentDecimal = 0.39;
        result = (salary*procentDecimal);
    } else if(region.value == "Region Midtjylland") {
        procent = "38%";
        procentDecimal = 0.38;
        result = (salary*procentDecimal); 
    } else if(region.value == "Region Syddanmark") {
        procent = "37%";
        procentDecimal = 0.37;
        result = (salary*procentDecimal); 
    } else if(region.value == "Region Sjælland") {
        procent = "36%";
        procentDecimal = 0.36;
        result = (salary*procentDecimal); 
    } else {
        procent = "40%";
        procentDecimal.value = 0.40;
        result = (salary*procentDecimal);
    }

    let moneyLeft = salary*(1-procentDecimal);
    
    let elementResult = document.querySelector(".result");
    elementResult.innerHTML = name.value.charAt(0).toUpperCase() + name.value.slice(1).toLowerCase() + " " + lastName.value.charAt(0).toUpperCase() + 
    lastName.value.slice(1).toLowerCase() + " din løn er: " + salary + " kroner, og du bor i " + region.value + 
    ". Du betaler " + procent+ " i skat, hvilket er " + result+ " kroner. Du har derfor " + moneyLeft + " kroner tilbage.";
   
    document.querySelector("#salary").value = "";
    name.value="";
    lastName.value="";
    region.value="";
    
}


