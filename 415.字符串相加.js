/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    const length = num1.length > num2.length ? num1.length : num2.length;
    let resultArr = [];
    let carry = 0;
    for (let i = 0; i < length; i++) {
        const num1Num = num1.length > i ? parseInt(num1[num1.length - 1 - i], 10) : 0;
        const num2Num = num2.length > i ? parseInt(num2[num2.length - 1 - i], 10) : 0;
        const num = num1Num + num2Num + carry;
        const b = num >= 10;
        carry = b ? 1 : 0;
        resultArr.push(b ? num - 10 : num);
    }
    if (carry === 1) resultArr.push(1);
    return resultArr.reverse().join('');
};

