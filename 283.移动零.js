/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            for (let s = i + 1; s < nums.length; s++) {
                if (nums[s] !== 0) {
                    nums[i] = nums[s];
                    nums[s] = 0;
                    break;
                }
            }
        }
    }
};

