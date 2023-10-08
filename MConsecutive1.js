
let nums = [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0]


var findMaxConsecutiveOnes = function (nums) {
    let count = 0;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            count++;
        }
        else {
            if (max < count) {
                max = count;
            }
            count = 0;
        }

        if (max < count) {
            max = count;
        }
    }
    return max;
};

console.log(findMaxConsecutiveOnes(nums));