/*
Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes
is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]

Example 2:
Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]

Constraints:
    The number of nodes in the list is n.
    1 <= k <= n <= 5000
    0 <= Node.val <= 1000
*/

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup(head, k) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let prevGroupTail = dummy;

    while (true) {
        // Find the kth node from current position
        let kth = prevGroupTail;
        for (let i = 0; i < k; i++) {
            kth = kth.next;
            if (!kth) return dummy.next;
        }

        const groupStart = prevGroupTail.next;
        const nextGroupStart = kth.next;

        // Reverse the group
        let prev = nextGroupStart, curr = groupStart;
        for (let i = 0; i < k; i++) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        prevGroupTail.next = kth;
        prevGroupTail = groupStart;
    }
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
printList(reverseKGroup(buildList([1, 2, 3, 4, 5]), 2)); // Output: [2, 1, 4, 3, 5]
