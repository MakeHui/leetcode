/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function(root) {
    if (!root) return 0;
    if (root.left && !root.left.left && !root.left.right) {
        return sumOfLeftLeaves(root.right) + root.left.val;
    }

    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};

// console.log(sumOfLeftLeaves({
//     val: 1,
//     left: {
//         val: 2,
//         left: {
//             val:4
//         },
//         right: {
//             val: 5
//         }
//     },
//     right: {
//         val:3
//     }
// }))

