/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 *
 * https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/description/
 *
 * algorithms
 * Easy (60.18%)
 * Total Accepted:    12.9K
 * Total Submissions: 21.3K
 * Testcase Example:  '[-10,-3,0,5,9]'
 *
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
 * 
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 * 
 * 示例:
 * 
 * 给定有序数组: [-10,-3,0,5,9],
 * 
 * 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：
 * 
 * ⁠     0
 * ⁠    / \
 * ⁠  -3   9
 * ⁠  /   /
 * ⁠-10  5
 * 
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (! nums || nums.length === 0) {
        return null;
    }
    console.log(nums);
    const centerIndex = Math.floor(nums.length / 2);
    const node = new TreeNode(nums[centerIndex]);
    node.left = nums.length === 1 ? null : sortedArrayToBST(nums.splice(0, centerIndex));
    node.right = sortedArrayToBST(nums.splice(1));
    return node;
};
console.log(sortedArrayToBST([9,12,14,17,19,23,50,54,67,72,76]));

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

