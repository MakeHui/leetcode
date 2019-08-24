/*
 * @lc app=leetcode.cn id=482 lang=javascript
 *
 * [482] 密钥格式化
 */
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    S = S.toLocaleUpperCase();
    let result = [], sum = 0;
    for (var i = S.length - 1; i >= 0; i--) {
        if (S[i] !== '-') {
            result.push(S[i]);
            sum += 1;
        }
        if (sum === K && (i !== 0 && S[i - 1] !== '-')) {
            result.push('-');
            sum = 0;
        }
    }
    return result.reverse().join('');
};
// console.log(licenseKeyFormatting("--a-a-a-a--", 2))
