/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] 分糖果
 */
/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    const unique = [...(new Set(candies))];
    return unique.length >= (candies.length / 2) ? (candies.length / 2) : unique.length
};

