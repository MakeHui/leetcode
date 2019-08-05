/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词模式
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    const strList = str.split(' ');
    if (pattern.length !== strList.length) return false;
    let table = new Object();
    for (let i = 0; i < pattern.length; i++) {
        if (table.hasOwnProperty(pattern[i])) {
            if (table[pattern[i]] !== strList[i]) {
                return false;
            }
        }
        else if (Object.values(table).indexOf(strList[i]) !== -1) {
            return false;
        }

        table[pattern[i]] = strList[i];
    }
    return true;
};

