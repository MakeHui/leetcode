/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 *
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (37.06%)
 * Total Accepted:    11.5K
 * Total Submissions: 30.8K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最小深度。
 * 
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例:
 * 
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最小深度  2.
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
 * @return {number}
 */
var minDepth = function(root) {
    if (root === null) {
        return 0;
    }
    const leftDeoth = minDepth(root.left);
    const rightDeoth = minDepth(root.right);
    return (leftDeoth && rightDeoth) ? Math.min(leftDeoth, rightDeoth) + 1 : leftDeoth + rightDeoth + 1;
};
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let tree1 = new TreeNode(1);
// tree1.left = new TreeNode(2);
// tree1.left.right = new TreeNode(4);
// tree1.left.right.left = new TreeNode(5);
tree1.right = new TreeNode(3);
tree1.right.right = new TreeNode(4);
tree1.right.right.left = new TreeNode(5);
console.log(minDepth(tree1));

