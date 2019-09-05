/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    if (nums.length === 0) return nums;
    if (nums.length * nums[0].length !== r * c) return nums;
    let result = [];
    nums = nums.join().split(',').map((a) => parseInt(a));
    for (let i = 0; i < r; i++) {
        result.push(nums.slice(i * c, i * c + c));
    }
    return result;
};

