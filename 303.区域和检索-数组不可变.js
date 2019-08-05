/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.sums = new Array(nums.length);
    this.sums[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        this.sums[i] = this.sums[i - 1] + nums[i];
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if (i == 0) return this.sums[j];
    return this.sums[j] - this.sums[i - 1];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

