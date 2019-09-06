/*
 * @lc app=leetcode.cn id=653 lang=javascript
 *
 * [653] 两数之和 IV - 输入 BST
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    var list = [];
    var recursion = function(r) {
        if (r === null) return;
        list.push(r.val);
        recursion(r.left);
        recursion(r.right);
    };
    recursion(root);
    for (let i = 0; i < list.length; i++) {
        if (![i, -1].includes(list.lastIndexOf(k - list[i]))) {
            return true;
        }
    }
    return false;
};

