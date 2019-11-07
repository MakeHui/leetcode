/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        const i = Math.floor((r - l) / 2) + l;
        if (nums[i] > target) {
            r = i - 1;
        }
        else if (nums[i] < target) {
            l = i + 1;
        }
        else {
            return i;
        }
    }
    return -1;
};
// @lc code=end

// console.log(search([-1,0,3,5,9,12], 2));
// console.log(search([-1,0,3,5,9,12], 9));