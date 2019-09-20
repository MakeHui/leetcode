/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    var f = function(s) {
        let left = 0, right = s.length - 1, count = 0;
        while (left < right) {
            if (s[left] === s[right]) {
                left += 1;
                right -= 1;
                continue;
            }
            count += 1;
            if (s[left] === s[right - 1]) {
                right -= 1;
            }
            else if (s[right] === s[left + 1]) {
                left += 1;
            }
            if (count > 1) {
                return false;
            }
        }
        return true;
    }
    if (f(s)) return true;
    return f(s.split('').reverse().join(''));
};

