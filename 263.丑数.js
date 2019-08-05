/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (num === 0) { return false; }
    if (num % 2 === 0) { num = num / 2; }
    else if (num % 3 === 0) { num = num / 3; }
    else if (num % 5 === 0) { num = num / 5; }
    else { return num === 1; }

    return isUgly(num);
};

