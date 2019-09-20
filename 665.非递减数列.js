/*
 * @lc app=leetcode.cn id=665 lang=javascript
 *
 * [665] 非递减数列
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let z = 0; z < i; z++) {
            if (nums[i] < nums[z]) {
                nums[z] = nums[i];
                sum += 1;
                break;
            }
        }
        if (sum > 1) return false;
    }
    return true;
};
// console.log(checkPossibility([3,4,2,3]))
// console.log(checkPossibility([4,2,3]))
// console.log(checkPossibility([4,2,1]))
