/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if (num === 0) return "0";
    let out = '', flag = false;
    if (num < 0) {
        num = -num;
        flag = true;
    }
    while (num / 7 !== 0) {
        out = num % 7 + out;
        num = Math.floor(num / 7);
    }
    return flag ? '-' + out : out;
};
// console.log(convertToBase7(-7))
