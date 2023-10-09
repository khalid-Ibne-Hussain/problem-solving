let arr1 = [-4, 3, 1, 0, 2, 5];

// console.log(arr1.sort());

const squareOfSortedArray = (nums) => {
    // let sortedArr = nums;
    let squareArr = []
    for (let i = 0; i < nums.length; i++) {
        squareArr.push(nums[i] * nums[i])
    }
    // sortedArr.sort();
    // let result = squareArr;
    // let result = squareArr.sort();
    // return result;
    return squareArr;
}

let result = squareOfSortedArray(arr1);
console.log(typeof result[2])
console.log(result.sort((a, b) => a - b));