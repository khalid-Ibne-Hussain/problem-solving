var removeElement = function (nums, val) {
    let newArr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            continue;
        }
        else {
            newArr.push(nums[i]);
        }
    }
    return {
        // newArr.length
        newArr,
    };

};

let arr = [1, 2, 3, 4, 5, 3, 6, 3, 4, 3];

let result = removeElement(arr, 3);

console.log(result.length);
console.log(result);