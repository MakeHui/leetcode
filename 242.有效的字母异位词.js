/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) { return false; }
    
    let sDict = {};
    let tDict = {};

    for (let i = 0; i < s.length; i++) {
        sDict[s[i]] = sDict.hasOwnProperty(s[i]) ? sDict[s[i]] + 1 : 1;
        tDict[t[i]] = tDict.hasOwnProperty(t[i]) ? tDict[t[i]] + 1 : 1;
    }

    const sDictLength = Object.keys(sDict).length;
    const tDictLength = Object.keys(tDict).length;

    if (sDictLength !== tDictLength) { return false; }

    for (const key in sDict) {
        if (!(tDict.hasOwnProperty(key) && sDict[key] === tDict[key])) {
            return false;
        }
    }

    return true;
};

