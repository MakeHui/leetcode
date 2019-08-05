/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function(head) {
    if (head === null) { return head; }

    var list = [];
    while (head) {
        list.push(head);
        head = head.next;
    }

    head = list.pop();
    let current = head;
    for (let i = list.length - 1; i >= 0; i--) {
        current.next = list[i];
        current = list[i];
    }

    current.next = null;

    return head;
};

