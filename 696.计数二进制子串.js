/*
 * @lc app=leetcode.cn id=696 lang=javascript
 *
 * [696] 计数二进制子串
 */
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let result = 0, s0 = 0, s1 = 0, c = '0';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') {
            if ('1' === c) {
                result += Math.min(s0, s1);
                c = '0';
                s0 = 0;
            }
            s0 += 1;
        }
        else {
            if ('0' === c) {
                result += Math.min(s0, s1);
                c = '1';
                s1 = 0;
            }
            s1 += 1;
        }
    }
    result += Math.min(s0, s1);
    return result;
};
// console.log(countBinarySubstrings('10101'))
