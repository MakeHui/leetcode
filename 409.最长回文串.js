/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let sArr = s.split('').sort();
    let length = 0;
    for (let i = 0; i < sArr.length - 1; i++) {
        if (sArr[i] === sArr[i + 1]) {
            length += 2;
            i += 1;
        }
    }
    return length + (sArr.length - length > 0 ? 1 : 0);
};

