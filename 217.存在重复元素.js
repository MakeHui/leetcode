/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if (nums.length === 1) { return false; }
    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i], i + 1) !== -1) {
            return true;
        }
    }
    return false;
};

