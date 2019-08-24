/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    if (s.length === 1) return false;
    const sLength = s.length;
    let matchStr = '';
    for (let i = 0; i < sLength / 2; i++) {
        matchStr += s[i];
        if (sLength % (i + 1) !== 0) continue;
        const matchCount = sLength / (i + 1);
        const mLength = matchStr.length;
        let z = 1;
        for (; z < matchCount; z++) {
            const temp = s.slice(z * mLength, (z + 1) * mLength);
            if (matchStr !== temp) break;
        }
        if (z === matchCount) return true;
    }
    return false;
};
// console.log(repeatedSubstringPattern('abcabcabcabc'))
