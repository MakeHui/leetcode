/*
 * @lc app=leetcode.cn id=686 lang=javascript
 *
 * [686] 重复叠加字符串匹配
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    let result = 1, temp = A;
    while (true) {
        if (A.length >= B.length) {
            if (A.includes(B)) return result;
            if (A.length / 2 > B.length && result >= 2) return -1;
        }
        result += 1;
        A += temp;
    }
};
// console.log(repeatedStringMatch("aaaaaaaaaaaaaaaaaaaaaab", "ba"))
