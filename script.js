// Function declaration

function resultA(number1, number2) {
    var multipliedNumber1 = number1 * number1;
    var multipliedNumber2 = number2 * number2;
    var sumNumbers1 = multipliedNumber1 + multipliedNumber2;
    var squareNumbers1 = sumNumbers1 * sumNumbers1;
    return squareNumbers1;
}

const result1 = resultA(2, 3);
console.log(result1);


// Function expression

const resultB = function (number1, number2) {
    var multipliedNumber1 = number1 * number1;
    var multipliedNumber2 = number2 * number2;
    var sumNumbers1 = multipliedNumber1 + multipliedNumber2;
    var squareNumbers1 = sumNumbers1 * sumNumbers1;
    return squareNumbers1;
};

const result2 = resultB(2, 3);
console.log(result2);

// Arrow function

const resultC = (number1, number2) => {
    var multipliedNumber1 = number1 * number1;
    var multipliedNumber2 = number2 * number2;
    var sumNumbers1 = multipliedNumber1 + multipliedNumber2;
    var squareNumbers1 = sumNumbers1 * sumNumbers1;
    return squareNumbers1;
};

const result3 = resultC(2, 3);
console.log(result3);



/* Solution provided

function doSquareCalculation(number1, number2) {
    const number1Squared = number1 * number1;
    const number2Squared = number2 * number2;
    const sum = number1Squared + number2Squared;
    const sumSquared = sum * sum;
    return sumSquared;
}

const doSquareCalculation = function(number1, number2) {
    const number1Squared = number1 * number1;
    const number2Squared = number2 * number2;
    const sum = number1Squared + number2Squared;
    const sumSquared = sum * sum;
    return sumSquared;
};

// OR

    const doSquareCalculation = function(number1, number2) {
        const sum = number1 * number1 + number2 * number2;
        return sum * sum;
    };

const doSquareCalculation = (number1, number2) => {
    const number1Squared = number1 * number1;
    const number2Squared = number2 * number2;
    const sum = number1Squared + number2Squared;
    const sumSquared = sum * sum;
    return sumSquared;
};

// OR (with helper function)

    const square = number => number * number;

    const doSquareCalculation = (number1, number2) =>
        square(square(number1) + square(number2));

*/
