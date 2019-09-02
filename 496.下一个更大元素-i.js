/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        const index = nums2.indexOf(nums1[i]);
        let find = false;
        for (let s = index + 1; s < nums2.length; s++) {
            if (nums2[s] > nums1[i]) {
                result.push(nums2[s]);
                find = true;
                break;
            }
        }
        if (!find) result.push(-1);
    }
    return result;
};

