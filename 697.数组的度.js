/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let result = Infinity, group = {}, maxCount = 1;
    for (let i = 0; i < nums.length; i++) {
        if (group[nums[i]]  === undefined) {
            group[nums[i]] = {
                c: 1,
                f: i,
                l: 0
            }
        }
        else {
            group[nums[i]]['l'] = i;
            group[nums[i]]['c'] += 1;
            maxCount = Math.max(maxCount, group[nums[i]]['c']);
        }
    }
    for (const key in group) {
        if (maxCount === group[key]['c']) {
            result = Math.min(result, Math.abs(group[key]['l'] - group[key]['f']));
        }
    }
    return result + 1;
};


// console.log(findShortestSubArray([1,2,2,3,1,4,2]));

