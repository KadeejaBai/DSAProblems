/*
Given the head of a singly linked list, group all the nodes with odd indices together followed by the
nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is considered even, and so on.
Note that the relative order inside both the even and odd groups should remain as it was in the input.
You must solve the problem in O(1) extra space complexity and O(n) time complexity.

Example 1:
Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]

Example 2:
Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]

Constraints:
    n == number of nodes in the linked list
    0 <= n <= 10^4
    -10^6 <= Node.val <= 10^6
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function oddEvenList(head) {
    if (!head) return head;
    let odd = head;
    let even = head.next;
    const evenHead = even;

    while (even !== null && even.next !== null) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
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
printList(oddEvenList(buildList([1, 2, 3, 4, 5]))); // Output: [1, 3, 5, 2, 4]
