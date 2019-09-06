/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let sum = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 1) continue;
        if (flowerbed[i - 1] === 1) continue;
        if (flowerbed[i + 1] === 1) continue;
        flowerbed[i] = 1;
        sum += 1;
    }
    return sum >= n;
};
// console.log(canPlaceFlowers([0,0,1,0,1],1))
