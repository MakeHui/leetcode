/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    if (root === null) return 0;
    return dfs(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
};

var dfs = function(root, sum) {
    if (root === null) return 0;
    sum -= root.val;
    return (sum === 0 ? 1 : 0) + dfs(root.left, sum) + dfs(root.right, sum);
}

