function addition(firstNumber, secondNumber) {
    if (typeof(firstNumber) == "number" && (typeof(secondNumber) == "number")) {

        var total = firstNumber + secondNumber;
        console.log()
        return total
    } else {
        console.log("not a number")

    }
    return 0


}

function subtract(firstNumber, secondNumber) {
    if (typeof(firstNumber) == "number" && (typeof(secondNumber) == "number")) {

        var total = firstNumber - secondNumber;
        console.log()
        return total
    } else {
        console.log("not a number")
    }
    return 0
}

function multiply(firstNumber, secondNumber) {
    if (typeof(firstNumber) == "number" && (typeof(secondNumber) == "number")) {

        var total = firstNumber * secondNumber;
        console.log()
        return total
    } else {
        console.log("not a number")
    }
    return 0
}

function divide(firstNumber, secondNumber) {
    if (typeof(firstNumber) == "number" && (typeof(secondNumber) == "number")) {

        if (secondNumber = 0) {

            console.log("cannot divide by zero")
        } else {

            var total = firstNumber / secondNumber;
            console.log()
            return total
        }
    } else {
        console.log("not a number")
    }
    return 0
}