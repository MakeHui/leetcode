/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        for (let s = 0; s < nums2.length; s++) {
            if (result.indexOf(nums2[s]) !== -1) {
                nums2.splice(s, 1);
                s -= 1;
                continue;
            }
            if (nums1[i] === nums2[s]) {
                result.push(nums2[s]);
                nums2.splice(s, 1);
                break;
            }
        }
    }
    return result;
};

// console.log(intersection([4,9,5], [9,4,9,8,4]));

