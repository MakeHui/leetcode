/*
 * @lc app=leetcode.cn id=594 lang=javascript
 *
 * [594] 最长和谐子序列
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let table = {}, max = 0;
    nums.forEach(num => {
        if (table.hasOwnProperty(num)) table[num] += 1;
        else table[num] = 1;
    });
    for (const key in table) {
        const nextKey = parseInt(key) + 1;
        if (!table.hasOwnProperty(nextKey)) continue;
        max = Math.max(table[key] + table[nextKey], max);
    }
    return max;
};

