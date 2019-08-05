/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (31.63%)
 * Total Accepted:    48.9K
 * Total Submissions: 154.5K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }
    
    if (strs.length === 1) {
        return strs[0];
    }

    let outStr = '';
    for (let i = 0; i < strs[0].length; i++) {
        for (let s = 0; s < strs.length - 1; s++) {
            if (strs[s][i] !== strs[s + 1][i]) {
                return outStr;
            }
            
            if (s === strs.length - 2) {
                outStr += strs[0][i];
            }
        }
    }

    return outStr;
};
