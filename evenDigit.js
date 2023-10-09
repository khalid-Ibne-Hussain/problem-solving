let arr1 = [10, 111, 1212, 13, 141516];

const findNumbers = (nums) => {
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (nums[i].toString().length % 2 === 0) {
            count++;
        }
    }
    return count
}


console.log(findNumbers(arr1));