/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N叉树的层序遍历
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];
    if (root === null) return result;
    let queue = [];
    queue.push(root);

    while (queue.length !== 0) {
        const size = queue.length;
        let temp = [];
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            temp.push(node.val);
            queue = queue.concat(node.children);
            // if (node.children === null) continue;
            // for (let i = 0; i < node.children.length; i++) {
            //     queue.push(node.children[i]);
            // }
        }
        result.push(temp);
    }
    return result;
};

