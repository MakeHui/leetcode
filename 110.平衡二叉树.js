/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 *
 * https://leetcode-cn.com/problems/balanced-binary-tree/description/
 *
 * algorithms
 * Easy (45.92%)
 * Total Accepted:    10.6K
 * Total Submissions: 22.9K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 * 
 * 本题中，一棵高度平衡二叉树定义为：
 * 
 * 
 * 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
 * 
 * 
 * 示例 1:
 * 
 * 给定二叉树 [3,9,20,null,null,15,7]
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回 true 。
 * 
 * 示例 2:
 * 
 * 给定二叉树 [1,2,2,3,3,null,null,4,4]
 * 
 * ⁠      1
 * ⁠     / \
 * ⁠    2   2
 * ⁠   / \
 * ⁠  3   3
 * ⁠ / \
 * ⁠4   4
 * 
 * 
 * 返回 false 。
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (root == null) {
        return true;
    }
    if (Math.abs(getDepth(root.left) - getDepth(root.right)) > 1) {
        return false;
    }
    return isBalanced(root.left) && isBalanced(root.right);
};

var getDepth = function(root) {
    if (root == null) {
        return 0;
    }
    return Math.max(getDepth(root.left), getDepth(root.right)) + 1;
}
// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }

// let tree1 = new TreeNode(1);
// tree1.left = new TreeNode(2);
// tree1.right = new TreeNode(3);
// tree1.right.right = new TreeNode(4);
// tree1.left.left = new TreeNode(5);

// console.log(isBalanced(tree1));
