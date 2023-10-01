// console.log("abc")

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// console.log(getRandomInt(1, 6));

// max in array

const numbers = [10, 20, 15, 18, 22, 25];

const max = (numbers) => {
    console.log(numbers);
    const big = Math.max(...numbers);
    console.log("Max number: " + big, "Type of: ", typeof (big));
}

// max(numbers);

// console.log("Length:", numbers.length);

let maxNUmber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNUmber) {
        maxNUmber = numbers[i];
    }
}

// console.log("Max Number using loop: ", maxNUmber, "Type: ", typeof (maxNUmber))

const nums = [10, 20, 30, 15, 7, 5, 6, 7, 13];

// const sortedNums = nums.sort(function (a, b) {
//     return b - a;
// })

// console.log(sortedNums);
// console.log(nums);

for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
        if (nums[j] < nums[j + 1]) {
            // const temp = nums[j];
            // nums[j] = nums[j + 1];
            // nums[j + 1] = temp;
            [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        }
    }
}
console.log("sorted:", nums);
console.log("hello");
console.log("h");