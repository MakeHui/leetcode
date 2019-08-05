/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    
    for (let i = 0; i < nums.length; i++) {
        let j = nums.indexOf(nums[i], i + 1);
        if (j !== -1 && Math.abs(i - j) <= k) {
            return true;
        }
    }
    return false;
};

