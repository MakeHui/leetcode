/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
var findMode = function(root) {
    let data = recursion(root),
        result = [],
        max = 0;
    for (const index in data) {
        if (data[index] > max) {
            max = data[index];
        }
    }

    for (const index in data) {
        if (data[index] === max) {
            result.push(parseInt(index, 10));
        }
    }

    return result;
};
var zz = 0
var recursion = function(root) {
    if (root === null) return [];
    let leftResult = recursion(root.left);
    let rightResult = recursion(root.right);
    for (const index in leftResult) {
        if (rightResult[index] !== undefined) {
            rightResult[index] += leftResult[index];
        }
        else {
            rightResult[index] = leftResult[index];
        }
    }
    if (rightResult[root.val] !== undefined) {
        rightResult[root.val] += 1;
    }
    else {
        rightResult[root.val] = 1;
    }
    return rightResult;
}

// console.log(findMode({
//     val:6,
//     left: {
//         val: 2,
//         left: {
//             val: 0,
//             left: null,
//             right: null
//         },
//         right: {
//             val: 4,
//             left: {
//                 val: 2,
//                 left: null,
//                 right: null
//             },
//             right: {
//                 val: 6,
//                 left: null,
//                 right: null
//             }
//         }
//     },
//     right: {
//         val: 8,
//         left: {
//             val: 7,
//             left: null,
//             right: null
//         },
//         right: {
//             val: 9,
//             left: null,
//             right: null
//         }
//     }
// }));

