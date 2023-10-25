const RecursionFactorial = (num) => {

    function factorial(num) {
        if (num === 0 || num === 1) {
            return 1;
        }
        else {
            let value = num * factorial(num - 1);
            return value;
        }
    }
    console.log(factorial(num));

    // add token with the value

    const token = "xyz123";
    const value = factorial(num).toString();

    // concat token with the value
    const valueWithToken = value + token;

    // concat and then replace every 2nd char with _
    let value2Array = valueWithToken.split("");
    for (let i = 2; i < valueWithToken.length; i += 3) {
        value2Array[i] = "_";
    }

    return value2Array.join("");


}

const num = 8;
console.log(RecursionFactorial(num));