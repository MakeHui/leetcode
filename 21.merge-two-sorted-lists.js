/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (52.16%)
 * Total Accepted:    41.9K
 * Total Submissions: 80.3K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 && l2) {
        let outNode = l1;
        while (l1) {
            if (! l2) {
                break;
            }
            if (l1.val <= l2.val && (! l1.next || l2.val <= l1.next.val)) {
                let temp = l2.next;
                l2.next = l1.next;
                l1.next = l2;
                l1 = l1.next;
                l2 = temp;
            }
            else if (l1.val > l2.val) {
                let temp = l2.next;
                l2.next = l1;
                l1 = l2;
                outNode = l1;
                l2 = temp;
            }
            else {
                l1 = l1.next;
            }
        }
        return outNode;
    }
    if (l1 || l2) {
        return l1 || l2;
    }

    return null;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let list = new ListNode(2);

let list2 = new ListNode(1);

console.log(mergeTwoLists(list, list2));

