/*
You are given the head of a linked list. Remove every node which has a node with a greater value
anywhere to the right side of it. Return the head of the modified linked list.

Example 1:
Input: head = [5,2,13,3,8]
Output: [13,8]
Explanation: The nodes that should be removed are 5, 2 and 3.
- Node 13 is to the right of node 5.
- Node 13 is to the right of node 2.
- Node 8 is to the right of node 3.

Example 2:
Input: head = [1,1,1,1]
Output: [1,1,1,1]

Constraints:
    The number of nodes in the given list is in the range [1, 10^5].
    1 <= Node.val <= 10^5
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function removeNodes(head) {
    // Reverse, then greedily keep non-decreasing, then reverse again
    function reverse(node) {
        let prev = null, curr = node;
        while (curr) { const next = curr.next; curr.next = prev; prev = curr; curr = next; }
        return prev;
    }

    head = reverse(head);
    let curr = head;
    let maxVal = head.val;

    while (curr.next !== null) {
        if (curr.next.val < maxVal) {
            curr.next = curr.next.next;
        } else {
            maxVal = curr.next.val;
            curr = curr.next;
        }
    }
    return reverse(head);
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
printList(removeNodes(buildList([5, 2, 13, 3, 8]))); // Output: [13, 8]
