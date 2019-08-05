/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 *
 * https://leetcode-cn.com/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (39.61%)
 * Total Accepted:    21.6K
 * Total Submissions: 53.5K
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * 删除链表中等于给定值 val 的所有节点。
 * 
 * 示例:
 * 
 * 输入: 1->2->6->3->4->5->6, val = 6
 * 输出: 1->2->3->4->5
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
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let last = null, current = head;
    while (current) {
        if (current.val !== val) {
            if (last === null) {
                head = current;
            }
            else {
                last.next = current;
            }
            last = current;
        }
        if (current === null) {
            last.next = null;
        }
        else {
            current = current.next;
        }
    }

    if (last) {
        last.next = null;
    }

    if (! head || head.val === val) {
        return null;
    }

    return head;
};

// console.log(removeElements(null, 6))
