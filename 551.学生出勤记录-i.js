/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let A = 0, L = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A') A += 1;
        else if (s[i] === 'L' && s[i - 1] === 'L') L += 1;
        else L = 1;
        if (A > 1 || L > 2) return false;
    }
    return true;
};

