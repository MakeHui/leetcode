/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const x = (1 + nums.length) * nums.length / 2;
    const y = nums.reduce((a, b) => a + b);
    const z = [...new Set(nums)].reduce((a, b) => a + b);
    return [y - z, x - z];
};
// console.log(findErrorNums([1,2,2,4]))
