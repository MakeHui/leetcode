/*
 * @lc app=leetcode.cn id=492 lang=javascript
 *
 * [492] 构造矩形
 */
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    const sqrt = Math.sqrt(area);
    let index = Math.ceil(sqrt);
    if (sqrt === index) return [sqrt, sqrt];
    for (let i = 0; i < area; i++) {
        const a = index + i;
        if (area % a === 0) return [a, area / a];
    }
    return [0, 0];
};

