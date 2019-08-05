/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 *
 * https://leetcode-cn.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (58.00%)
 * Total Accepted:    28.1K
 * Total Submissions: 48.4K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 
 * 你可以假设数组是非空的，并且给定的数组总是存在众数。
 * 
 * 示例 1:
 * 
 * 输入: [3,2,3]
 * 输出: 3
 * 
 * 示例 2:
 * 
 * 输入: [2,2,1,1,1,2,2]
 * 输出: 2
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // let dict = {}, length = nums.length;
    // nums.forEach(element => {
    //     dict[element] = dict.hasOwnProperty(element) ? dict[element] + 1 : 1;
    // });
    // for (const key in dict) {
    //     if (dict[key] > length / 2) {
    //         return key;
    //     }
    // }
    // return null;

    let major = nums[0], count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (major === nums[i]) {
            count += 1;
        }
        else if (count === 1) {
            major = nums[i];
        }
        else {
            count -= 1;
        }
    }
    return major;
};
// console.log(majorityElement([3,2,3]))
