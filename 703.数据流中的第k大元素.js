/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第K大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.nums = nums.sort((a, b) => b - a).splice(0, k);
    this.k = k;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if (this.nums.length === 0) {
        this.nums.push(val);
    }
    else if (this.nums.length < this.k) {
        if (this.nums[this.nums.length - 1] > val) {
            this.nums.push(val);
        }
        else {
            for (let i = 0; i < this.nums.length; i++) {
                if (this.nums[i] <= val) {
                    this.nums.splice(i, 0, val);
                    break;
                }
            }
        }
    }
    else if (this.nums.length === this.k) {
        if (this.nums[this.k - 1] < val) {
            for (let i = 0; i < this.nums.length; i++) {
                if (this.nums[i] <= val) {
                    this.nums.splice(i, 0, val);
                    break;
                }
            }
            this.nums.pop();
        }
    }
    
    if (this.nums.length === this.k) {
        return this.nums[this.k - 1];
    }
    else {
        return null;
    }
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

// let f = new KthLargest(1,[]);
// console.log(f.add(-3));
// console.log(f.add(-2));
