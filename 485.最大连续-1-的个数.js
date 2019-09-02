/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续1的个数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let last = 0, current = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            current += 1;
            continue;
        }
        last = Math.max(last, current);
        current = 0;
    }
    return Math.max(last, current);
};

