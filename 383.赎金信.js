/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    ransomNote = ransomNote.split('');
    magazine = magazine.split('');
    let result = [];
    for (let i = 0; i < ransomNote.length; i++) {
        for (let s = 0; s < magazine.length; s++) {
            if (ransomNote[i] === magazine[s]) {
                result.push(magazine[s]);
                magazine.splice(s, 1);
                break;
            }
        }
    }
    return ransomNote.join('') === result.join('');
};

// console.log(canConstruct("aac", "aaasdf"));

