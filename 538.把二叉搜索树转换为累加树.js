/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */
var convertBST = function(root) {
    var sum = 0;
    var dfs = function(root) {
        if(root == null) return null;
        dfs(root.right);
        root.val = (sum += root.val);
        dfs(root.left);
        
        return root;
    }
    dfs(root);
    return root;
};

