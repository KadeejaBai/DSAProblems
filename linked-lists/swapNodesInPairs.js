/*
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem
without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Example 1:
Input: head = [1,2,3,4]
Output: [2,1,4,3]

Example 2:
Input: head = []
Output: []

Example 3:
Input: head = [1]
Output: [1]

Constraints:
    The number of nodes in the list is in the range [0, 100].
    0 <= Node.val <= 100
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function swapPairs(head) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    while (prev.next !== null && prev.next.next !== null) {
        const first = prev.next;
        const second = prev.next.next;
        first.next = second.next;
        second.next = first;
        prev.next = second;
        prev = first;
    }
    return dummy.next;
}

// Helper
function ListNode(val, next) { this.val = val; this.next = next || null; }
function buildList(arr) {
    let head = null;
    for (let i = arr.length - 1; i >= 0; i--) head = new ListNode(arr[i], head);
    return head;
}
function printList(head) {
    const res = []; while (head) { res.push(head.val); head = head.next; } console.log(res);
}

// Example usage:
printList(swapPairs(buildList([1, 2, 3, 4]))); // Output: [2, 1, 4, 3]
