/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let stack = [root], result = [];
    while (stack.length > 0) {
        const length = stack.length;
        let sum = 0;
        for (let i = 0; i < length; i++) {
            const temp = stack.shift();
            sum += temp.val;
            if (temp.left !== null) stack.push(temp.left);
            if (temp.right !== null) stack.push(temp.right);
        }
        result.push(sum / length);
    }
    return result;
};

