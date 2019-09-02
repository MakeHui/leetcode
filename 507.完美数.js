/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num == 1) return false;
    const half = Math.sqrt(num);
    let result = 1;
    for (let i = 2; i < half; i++) {
        const remainder = num % i;
        if (remainder === 0) {
            result += i + num / i;
        }
    }
    return result === num;
};
// console.log(checkPerfectNumber(-6));
