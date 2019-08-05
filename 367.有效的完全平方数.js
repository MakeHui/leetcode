/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let index = 1;
    while ((num -= (2 * index - 1)) > 0) {
        index += 1;
    }
    return num === 0;
};

// console.log(isPerfectSquare(12100));

