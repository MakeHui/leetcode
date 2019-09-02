/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const lines = [ 'qwertyuiop', 'asdfghjkl', 'zxcvbnm' ];
    let result = [];
    for (let i = 0; i < words.length; i++) {
        for (let s = 0; s < lines.length; s++) {
            let find = true;
            for (let z = 0; z < words[i].length; z++) {
                if (lines[s].indexOf(words[i][z].toLocaleLowerCase()) === -1) {
                    find = false;
                    break;
                }
            }
            if (find) {
                result.push(words[i]);
                break;
            }
        }
    }
    return result;
};
// console.log(findWords(["Hello","Alaska","Dad","Peace"]))
