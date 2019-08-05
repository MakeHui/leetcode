/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 */
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    if (s.length === 0) return 0;
    let flag = true;
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            flag = true;
        }
        else if (flag) {
            flag = false;
            result += 1;
        }
    }
    return result;
};

