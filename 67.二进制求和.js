/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (46.19%)
 * Total Accepted:    16.4K
 * Total Submissions: 35.4K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 
 * 输入为非空字符串且只包含数字 1 和 0。
 * 
 * 示例 1:
 * 
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 
 * 示例 2:
 * 
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const maxLength = Math.max(a.length, b.length);
    let addNum = 0;
    let outArr = [];
    for (let i = 0; i < maxLength; i++) {
        const aIndex = a.length - i - 1;
        const bIndex = b.length - i - 1;
        const aNum = aIndex >= 0 ? parseInt(a[aIndex], 2) : 0;
        const bNum = bIndex >= 0 ? parseInt(b[bIndex], 2) : 0;
        const sum = aNum + bNum + addNum;
        addNum = (sum >= 2) ? 1 : 0;
        outArr.push(sum % 2);
    }

    if (addNum) {
        outArr.push(addNum);
    }

    return outArr.reverse().join('');
};

