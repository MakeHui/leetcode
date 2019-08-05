/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(root === null) { return []; }
    const {left, right, val} = root;
    if (!(left || right)) { return [String(val)]} ;
    let result = [];

    if (left !== null) {
        let res = binaryTreePaths(left);
        for (let i = 0; i < res.length; i++) {
            res[i] = val + '->' + res[i];
        }
        result = result.concat(res);
    }

    if (right !== null) {
        let res = binaryTreePaths(right);
        for (let i = 0; i < res.length; i++) {
            res[i] = val + '->' + res[i];
        }
        result = result.concat(res);
    }

    return result;
};

console.log(binaryTreePaths({
    val: 1,
    left: {
        val: 2,
        left: null, right: {
            val: 5,
            left: null, right: null
        }
    },
    right: {
        val: 3,
        left: null, right: null
    }
}));

