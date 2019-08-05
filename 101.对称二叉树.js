/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode-cn.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (44.75%)
 * Total Accepted:    21.8K
 * Total Submissions: 48.4K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给定一个二叉树，检查它是否是镜像对称的。
 * 
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 * 
 * 
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 * 
 * 
 * 说明:
 * 
 * 如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
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
var isSymmetric = function(root) {
    return root ? isMirror(root.left, root.right) : true;
};
/**
 * p is q mirror
 * @param {TreeNode} p 
 * @param {TreeNode} q 
 */
var isMirror = function (p, q) {
    if ((p === null && q !== null) || (p !== null && q === null)) {
        return false;
    }
    else if (p === null && q === null) {
        return true;
    }
    if (p.val === q.val) {
        return isMirror(p.left, q.right) && isMirror(p.right, q.left);
    }
    return false;
}

// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }

// let tree1 = new TreeNode(1);
// tree1.left = new TreeNode(3);
// tree1.right = new TreeNode(3);
// tree1.right.right = new TreeNode(5);
// // tree1.left.left = new TreeNode(5);


// console.log(isSymmetric(tree1));

