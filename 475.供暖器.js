/*
 * @lc app=leetcode.cn id=475 lang=javascript
 *
 * [475] 供暖器
 */
/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    let max = 0;
    for (let i = 0; i < houses.length; i++) {
        let min = Infinity;
        for (let s = 0; s < heaters.length; s++) {
            const temp = Math.abs(houses[i] - heaters[s]);
            if (temp < min) min = temp;
        }
        if (min > max) max = min;
    }
    return max;
};
console.log(findRadius([1,2,3],[2]))
