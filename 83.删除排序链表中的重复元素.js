/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (43.46%)
 * Total Accepted:    16.9K
 * Total Submissions: 38.6K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 * 
 * 示例 1:
 * 
 * 输入: 1->1->2
 * 输出: 1->2
 * 
 * 
 * 示例 2:
 * 
 * 输入: 1->1->2->3->3
 * 输出: 1->2->3
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (head && head.next) {
        if (head.val == head.next.val) {
            head.next = head.next.next;
            deleteDuplicates(head);
        }
        else {
            deleteDuplicates(head.next);
        }
    }

    return head;
};


// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

// let list = new ListNode(1);
// let list2 = new ListNode(1);
// let list3 = new ListNode(2);
// let list4 = new ListNode(2);
// list.next = list2;
// list2.next = list3;
// list3.next = list4;

// console.log(deleteDuplicates(null));

