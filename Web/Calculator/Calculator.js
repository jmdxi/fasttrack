function addition(firstNumber, secondNumber) {
    if (typeof (firstNumber) == "number" && (typeof (secondNumber) == "number")) {

        var total = firstNumber + secondNumber;
        console.log("total")
        return total
    } else (console.log("not a number"))


}

function subtract(firstNumber, secondNumber) {
    if (typeof (firstNumber) == "number" && (typeof (secondNumber) == "number")) {

        var total = firstNumber - secondNumber;
        console.log("total")
        return total
    } else (console.log("not a number"))
}

function multiply(firstNumber, secondNumber) {
    if (typeof (firstNumber) == "number" && (typeof (secondNumber) == "number")) {

        var total = firstNumber * secondNumber;
        console.log("total")
        return total
    } else (console.log("not a number"))
}

function divide(firstNumber, secondNumber) {
    if (typeof (firstNumber) == "number" && (typeof (secondNumber) == "number")) {

        if(firstNumber>0){

            console.log("cannot divide by zero")
        }
        else {

            var total = firstNumber / secondNumber;
            console.log("total")
            return total
        }
    } else (console.log("not a number"))
}