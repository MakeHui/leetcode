/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    const medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];
    const sortNums = nums.slice(0).sort((a, b) => b - a);
    for (let i = 0; i < nums.length; i++) {
        const ranking = sortNums.indexOf(nums[i]);
        nums[i] = ranking < 3 ? medals[ranking] : ranking + 1 + '';
    }
    return nums;
};
// console.log(findRelativeRanks([10,3,8,9,4]))
