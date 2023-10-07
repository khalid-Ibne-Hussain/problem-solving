var fizzBuzz = function (n) {
    let array = [];

    for (let i = 1; i <= n; i++) {

        if (i % 3 == 0 && i % 5 == 0) {
            array[i - 1] = "FizzBuzz";
        }
        else if (i % 3 == 0) {
            array[i - 1] = "Fizz";
        }
        else if (i % 5 == 0) {
            array[i - 1] = "Buzz";
        }
        else {
            array[i - 1] = "" + i;
        }
    }
    // let newarray = array.slice(1);
    return array;
    // return newarray;    
};

const rArray = fizzBuzz(3);
console.log(rArray);


// let a = '' + 50;
// console.log(a);
