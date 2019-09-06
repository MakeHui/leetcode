/*
 * @lc app=leetcode.cn id=606 lang=javascript
 *
 * [606] 根据二叉树创建字符串
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
    if (t === null) return  '';
    let result = t.val + '';
    const left = tree2str(t.left);
    const right = tree2str(t.right);
    if (left !== '' && right !== '') {
        result += `(${left})`;
        result += `(${right})`;
    }
    else if (left !== '') {
        result += `(${left})`;
    }
    else if (right !== '') {
        if (left === '') {
            result += `(${left})`;
        }
        result += `(${right})`;
    }
    return result;
};

