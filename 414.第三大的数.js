/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let big1 = nums[0], big2 = big3 = null;
    for (let i = 1; i < nums.length; i++) {
        if (big1 === nums[i]) continue;
        if (big1 > nums[i]) {
            if (big2 === null) big2 = nums[i];
            if (big2 === nums[i]) continue;
            if (big2 > nums[i]) {
                if (big3 === null) big3 = nums[i];
                if (big3 >= nums[i]) continue;
                else big3 = nums[i];
            }
            else {
                big3 = big2;
                big2 = nums[i];
            }
        }
        else {
            big3 = big2;
            big2 = big1;
            big1 = nums[i];
        }
    }
    return big3 !== null ? big3 : big1;
};
// thirdMax([3,3,4,3,4,3,0,3,3])
