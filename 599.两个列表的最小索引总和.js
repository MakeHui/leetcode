/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 */
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let map = {};
    for (let i = 0; i < list1.length; i++) {
        const index = list2.indexOf(list1[i]);
        if (index !== -1) {
            map[list1[i]] = i + index;
        }
    }
    let result = [], min = Infinity;
    for (const key in map) {
        if (min > map[key]) {
            min = map[key];
            result = [key];
        }
        else if (min === map[key]) {
            result.push(key);
        }
    }
    return result;
};

