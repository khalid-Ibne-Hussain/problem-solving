// find out max, min, error

const temperature = (temp) => {
    let max = temp[0];
    let min = temp[0];
    let error = [];

    for (let i = 0; i < temp.length; i++) {
        if (typeof temp[i] !== "number") {
            error.push(temp[i]);
            continue
        }

        if (max < temp[i]) {
            max = temp[i]
        }
        if (min > temp[i]) {
            min = temp[i];
        }
    }
    // return max - min;
    return {
        max,
        min,
        error
    }

}

let temp = [5, 10, "banana", 15, -5, "apple", -10, 20, -20, "err"];
// console.log(temperature(temp));

let output = temperature(temp);

console.log("Max: ", output.max);
console.log("Min: ", output.min);
console.log("Error: ", output.error);

