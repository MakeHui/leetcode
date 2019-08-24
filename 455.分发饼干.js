/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g = g.sort((a, b) => a - b);
    s = s.sort((a, b) => a - b);
    let result = 0, gPoint = 0, sPoint = 0;
    while (gPoint <= g.length && sPoint <= s.length) {
        if (g[gPoint] <= s[sPoint]) {
            result += 1;
            gPoint += 1;
        }
        sPoint += 1;
    }
    
    return result;
};
// console.log(findContentChildren([10,9,8,7], [5,6,7,8]))
