/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        for (let s = 0; s < nums2.length; s++) {
            if (nums1[i] === nums2[s]) {
                result.push(nums2[s]);
                nums2.splice(s, 1);
                break;
            }
        }
    }
    return result;
};

