/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function(root) {
    if (root === null) return 0;
    const nodes = recursion(root);
    let result = Infinity;
    for (let i = 0; i < nodes.length - 1; i++) {
        result = Math.min(result, Math.abs(nodes[i] - nodes[i + 1]));
    }
    return result;
};

var recursion = function(root) {
    if (root === null) return [];
    return recursion(root.left).concat([root.val], recursion(root.right));
}

// console.log(getMinimumDifference(
//     {
//         val:1,
//         left:null,
//         right: {
//             val:3,
//             left: {
//                 val:2,
//                 left: null,
//                 right: null
//             },
//             right: null
//         }
//     }
// ))

