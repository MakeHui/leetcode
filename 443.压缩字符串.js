/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let count = 1;
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === chars[i + 1]) {
            count += 1;
        }
        else {
            if (count === 1) continue;
            const countStr = count.toString(10);
            for (let s = 0; s < countStr.length; s++) {
                chars[i - count + 2 + s] = countStr[s];
            }
            chars.splice(i - count + 2 + 1 + countStr.length - 1, count - 2 - countStr.length + 1);
            i -= count - 2 - countStr.length + 1;
            count = 1;
        }
    }
    return chars.length;
};

// let a = ["c","a","a","b","b","b","b","b","b","b","b","b","b","c","c","c","c","c","c","c","c","c","c","c","c"];
// console.log(compress(a))
// console.log(a);

