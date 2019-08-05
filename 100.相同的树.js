/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 *
 * https://leetcode-cn.com/problems/same-tree/description/
 *
 * algorithms
 * Easy (50.85%)
 * Total Accepted:    14.7K
 * Total Submissions: 28.8K
 * Testcase Example:  '[1,2,3]\n[1,2,3]'
 *
 * 给定两个二叉树，编写一个函数来检验它们是否相同。
 * 
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 * 
 * 示例 1:
 * 
 * 输入:       1         1
 * ⁠         / \       / \
 * ⁠        2   3     2   3
 * 
 * ⁠       [1,2,3],   [1,2,3]
 * 
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入:      1          1
 * ⁠         /           \
 * ⁠        2             2
 * 
 * ⁠       [1,2],     [1,null,2]
 * 
 * 输出: false
 * 
 * 
 * 示例 3:
 * 
 * 输入:       1         1
 * ⁠         / \       / \
 * ⁠        2   1     1   2
 * 
 * ⁠       [1,2,1],   [1,1,2]
 * 
 * 输出: false
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if ((p === null && q !== null) || (p !== null && q === null)) {
        return false;
    }
    else if (p === null && q === null) {
        return true;
    }
    if (p.val === q.val) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
    return false;
};

// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }

// let tree1 = new TreeNode(1);
// tree1.left = new TreeNode(3);
// tree1.left.left = new TreeNode(5);
// tree1.right = new TreeNode(2);

// let tree2 = new TreeNode(1);
// tree2.left = new TreeNode(3);
// tree2.left.left = new TreeNode(5);
// tree2.right = new TreeNode(2);
// tree2.right.right = new TreeNode(7);

// console.log(isSameTree(tree1, tree2));
