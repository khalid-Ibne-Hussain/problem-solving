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

    // add token with the value

    const token = "xyz123";
    const value = factorial(num).toString();

    // concat token with the value
    const valueWithToken = value + "_" + token;

    return valueWithToken;


}



const num = 4;
console.log(RecursionFactorial(num));