/**
 * 977	有序数组的平方    
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    let outArr = [];
    A.forEach(element => {
        outArr.push(element * element);
    });
    return outArr.sort((a, b) => {
        return a - b;
    });
};

// console.log(sortedSquares([-4,-1,0,3,10]));

/**
 * 985. 查询后的偶数和
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
    let outArr = [];
    queries.forEach(element => {
        let num = 0;
        A[element[1]] += element[0];
        A.forEach(elmt => {
            if (elmt % 2 === 0) {
                num += elmt;
            };
        });
        outArr.push(num);
    });
    return outArr;
};

// console.log(sumEvenAfterQueries([1,2,3,4], [[1,0],[-3,1],[-4,0],[2,3]]))

/**
 * 961. 重复 N 次的元素
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let nums = [];
    for (let i = 0; i < A.length; i++) {
        if (nums.indexOf(A[i]) !== -1) {
            return A[i];
        }
        nums.push(A[i]);
    }
};

// console.log(repeatedNTimes([1,2,3,3]));

/**
 * 942. 增减字符串匹配
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    let outArr = [],
        left = -1,
        right = S.length + 1;
    (S + 'D').split('').forEach(element => {
        if (element === 'I') {
            outArr.push(++left);
        }
        else {
            outArr.push(--right);
        }
    });
    return outArr;
};

// console.log(diStringMatch('IDID'));

/**
 * 237. 删除链表中的节点
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let list = new ListNode(4);
let list2 = new ListNode(5);
let list3 = new ListNode(1);
let list4 = new ListNode(9);

list.next = list2;
list2.next = list3;
list3.next = list4;

// deleteNode(list2);
// console.log(list);

/**
 * 461. 汉明距离
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    const result = x ^ y;
    let outNum = 0;
    result.toString(2).split('').forEach(element => {
        outNum += parseInt(element, 10);
    });

    return outNum;
};

// console.log(hammingDistance(93, 73));

/**
 * 922. 按奇偶排序数组 II
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    A.forEach((element, index) => {
        if (element % 2 === index % 2) {
            return;
        }
        let tmp = 0;
        for (let i = index + 1; i < A.length; i++) {
            if (index % 2 === A[i] % 2) {
                tmp = A[i];
                A[i] = element;
                A[index] = tmp;
                break;
            }
        }
    });
    return A;
};

// console.log(sortArrayByParityII([4,2,5,7]));

/**
 * 944. 删列造序
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    let set = new Set();
    for (let i = 0; i < A[0].length; i++) {
        for (let s = 0; s < A.length - 1; s++) {
            if (A[s][i] > A[s + 1][i]) {
                set.add(i);
            }
        }
    }
    return set.size;
};

// console.log(minDeletionSize(["cba", "daf", "ghi"]));

/**
 * 617. 合并二叉树
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if (t1 && t2) {
        let newTree = new TreeNode(t1.val + t2.val);
        newTree.left = mergeTrees(t1.left, t2.left);
        newTree.right = mergeTrees(t1.right, t2.right);    
        return newTree;
    }
    else if (t1 || t2) {
        return t1 || t2;
    }
    
    return null;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let tree1 = new TreeNode(1);
tree1.left = new TreeNode(3);
tree1.left.left = new TreeNode(5);
tree1.right = new TreeNode(2);

let tree2 = new TreeNode(2);
tree2.left = new TreeNode(1);
tree2.left.right = new TreeNode(4);
tree2.right = new TreeNode(3);
tree2.right.right = new TreeNode(7);

// console.log(mergeTrees(tree1, tree2));

/**
 * 104. 二叉树的最大深度
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
var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }
    
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    return (leftDepth > rightDepth ? leftDepth : rightDepth) + 1;
};

/**
 * 476. 数字的补数
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    const bitString = num.toString(2);
    return (~num) & ~((~0)<<bitString.length);
    // let temp = '';
    // for (let i = 0; i < bitString.length; i++) {
    //     temp += bitString[i] === '0' ? '1' : '0';
    // }
    // return parseInt(temp, 2);
};

console.log(findComplement(5));