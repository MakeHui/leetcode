/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let resultStr = '';
    for (let i = 0; i < Math.ceil(s.length / k); i++) {
        const temp = s.slice(i * k, i * k + k);
        resultStr += (i % 2 === 0) ? temp.split('').reverse().join('') : temp;
    }
    return resultStr;
};

