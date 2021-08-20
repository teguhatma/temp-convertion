let tempFrom = document.getElementById("tempFrom");
let tempTo = document.getElementById("tempTo");
let tempResult = document.getElementById("tempResult");
let tempInput = document.getElementById("tempInput");

function onChange() {
    tempResult.value = "";
    tempInput.value = "";
}

function CelToFah(param) {
    F = (9 / 5) * param + 32;
    return F;
}

function CelToRea(param) {
    R = (4 / 5) * param;
    return R;
}

function FahToCel(param) {
    C = (5 / 9) * (param - 32);
    return C;
}

function FahToRea(param) {
    R = (4 / 9) * (param - 32);
    return R;
}

function ReaToCel(param) {
    C = (5 / 4) * param;
    return C;
}

function ReaToFah(param) {
    F = (9 / 4) * param + 32;
    return F;
}

function convert() {
    let inputValueInt = parseInt(tempInput.value);

    // Celcius Logic
    if(tempFrom.value === "celcius" && tempTo.value === "celcius"){
        tempResult.value = tempInput.value;
    }
    else if(tempFrom.value === "celcius" && tempTo.value === "fahrenheit"){
        let result = CelToFah(inputValueInt);
        tempResult.value = result;
    }
    else if(tempFrom.value === "celcius" && tempTo.value === "reamur"){
        let result = CelToRea(inputValueInt);
        tempResult.value = result;
    }

    // Fahrenheit Logic
    else if(tempFrom.value === "fahrenheit" && tempTo.value === "fahrenheit"){
        tempResult.value = tempInput.value;
    }
    else if(tempFrom.value === "fahrenheit" && tempTo.value === "celcius"){
        let result = FahToCel(inputValueInt)
        tempResult.value = result;
    }
    else if(tempFrom.value === "fahrenheit" && tempTo.value === "reamur"){
        let result = FahToRea(inputValueInt)
        tempResult.value = result;
    }

    // Reamur Logic
    else if(tempFrom.value === "reamur" && tempTo.value === "reamur"){
        tempResult.value = tempInput.value;
    }
    else if(tempFrom.value === "reamur" && tempTo.value === "fahrenheit"){
        let result = ReaToFah(inputValueInt)
        tempResult.value = result;
    }
    else if(tempFrom.value === "reamur" && tempTo.value === "celcius"){
        let result = ReaToCel(inputValueInt)
        tempResult.value = result;
    }
}
