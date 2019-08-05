/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (58.52%)
 * Total Accepted:    9.9K
 * Total Submissions: 16.9K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 * 
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其自底向上的层次遍历为：
 * 
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
 * ]
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (root === null) {
        return [];
    }
    
    let dp = [], stack = [root];
    while (stack.length) {
        let currnetList = [], stackLength = stack.length;
        for (let i = 0; i < stackLength; i++) {
            const currentNode = stack.shift();
            currnetList.push(currentNode.val);
            if (currentNode.left) {
                stack.push(currentNode.left);
            }
            if (currentNode.right) {
                stack.push(currentNode.right);
            }
        }
        dp.push(currnetList);
    }
    return dp.reverse();
};

// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }

// let tree1 = new TreeNode(1);
// tree1.left = new TreeNode(3);
// tree1.right = new TreeNode(3);
// tree1.right.right = new TreeNode(5);
// tree1.left.left = new TreeNode(5);


// console.log(levelOrderBottom(tree1));

