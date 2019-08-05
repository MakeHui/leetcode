/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 *
 * https://leetcode-cn.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (54.10%)
 * Total Accepted:    10.4K
 * Total Submissions: 19.2K
 * Testcase Example:  '3'
 *
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 3
 * 输出: [1,3,3,1]
 * 
 * 
 * 进阶：
 * 
 * 你可以优化你的算法到 O(k) 空间复杂度吗？
 * 
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const outArr = new Array(rowIndex);
    for (let i = 0; i < rowIndex + 1; i++) {
        if (i === 0) {
            outArr[0] = 1;
            continue;
        }
        for (let s = rowIndex; s >= 1; s--) {
            outArr[s] = (outArr[s] | 0) + (outArr[s - 1] | 0);
        }
    }
    return outArr;
};
// console.log(getRow(0));
