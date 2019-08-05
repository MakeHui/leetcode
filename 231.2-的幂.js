/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    var num, p = 0;
    while (true) {
        num = Math.pow(2, p);
        if (num === n) { return true; }
        if (num > n) { return false; }
        p += 1;
    }
};

