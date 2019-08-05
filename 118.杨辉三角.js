/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (59.92%)
 * Total Accepted:    16.8K
 * Total Submissions: 28K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 5
 * 输出:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const outArr = [];
    if (numRows === 0) {
        return outArr;
    }
    outArr.push([1]);
    for (let i = 2; i < numRows + 1; i++) {
        const thisArr = [];
        for (let s = 0; s < i; s++) {
            const currentArr = outArr[outArr.length - 1];
            const left = (0 <= s - 1) ? currentArr[s - 1] : 0;
            const right = (currentArr.length > s) ? currentArr[s] : 0;
            thisArr.push(left + right);
        }
        outArr.push(thisArr);
    }
    return outArr;
};
console.log(generate(15));
