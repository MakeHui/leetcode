/*
 * @lc app=leetcode.cn id=693 lang=javascript
 *
 * [693] 交替位二进制数
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    const bs = n.toString(2);
    for (let i = 0; i < bs.length - 1; i++) {
        if (bs[i] === bs[i + 1]) return false;
    }
    return true;
};

