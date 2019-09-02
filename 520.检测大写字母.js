/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if (word.length === 1) return true;
    const first = word[0].charCodeAt() < 97;
    const second = word[1].charCodeAt() < 97;
    if (!first && second) return false;
    const flag = first ? second : first;
    for (let i = 2; i < word.length; i++) {
        if (flag) {
            if (word[i].charCodeAt() >= 97) return false;
        }
        else if (word[i].charCodeAt() < 97) return false;
    }
    return true;
};
// console.log(detectCapitalUse("FlaG"))
