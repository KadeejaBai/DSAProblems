/*
There is a singly-linked list head and we want to delete a node in it.
You are given the node to be deleted node. You will not be given access to the first node of head.
All values of the linked list are unique, and it is guaranteed the given node node is not the last node.
Delete the given node.

Example 1:
Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list becomes [4,1,9].

Example 2:
Input: head = [4,5,1,9], node = 1
Output: [4,5,9]

Constraints:
    The number of nodes in the list is in the range [2, 1000].
    -1000 <= Node.val <= 1000
    The value of each node in the list is unique.
    The given node is not the tail node.
*/

/**
 * @param {ListNode} node
 * @return {void}
 */
function deleteNode(node) {
    // Copy next node's value and skip the next node
    node.val = node.next.val;
    node.next = node.next.next;
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
const head = buildList([4, 5, 1, 9]);
const nodeToDelete = head.next; // node with value 5
deleteNode(nodeToDelete);
printList(head); // Output: [4, 1, 9]
