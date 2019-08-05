/*
 * @lc app=leetcode.cn id=400 lang=javascript
 *
 * [400] 第N个数字
 */
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    let length = 1;
    let numSize = 0;
    while ((numSize = 9 * Math.pow(10, length - 1) * length) < n) {
        length += 1;
        n -= numSize;
    }
    const numStr = (Math.pow(10, length - 1) + Math.ceil(n / length) - 1).toString()
    let index = (n - 1) % length;
    return parseInt(numStr[index], 10);
};

// console.log(findNthDigit(1000));

