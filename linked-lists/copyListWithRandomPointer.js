/*
A linked list of length n is given such that each node contains an additional random pointer, which could
point to any node in the list, or null.

Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes.
Return the head of the copied linked list.

Example 1:
Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]

Example 2:
Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]]

Constraints:
    0 <= n <= 1000
    -10^4 <= Node.val <= 10^4
    Node.random is null or is pointing to some node in the linked list.
*/

/**
 * @param {Node} head
 * @return {Node}
 */
function copyRandomList(head) {
    if (!head) return null;
    const map = new Map();

    // First pass: create all nodes
    let curr = head;
    while (curr) {
        map.set(curr, new Node(curr.val, null, null));
        curr = curr.next;
    }

    // Second pass: assign next and random pointers
    curr = head;
    while (curr) {
        if (curr.next) map.get(curr).next = map.get(curr.next);
        if (curr.random) map.get(curr).random = map.get(curr.random);
        curr = curr.next;
    }
    return map.get(head);
}

// Helper
function Node(val, next, random) { this.val = val; this.next = next; this.random = random; }

// Example usage:
const n1 = new Node(7, null, null);
const n2 = new Node(13, null, null);
const n3 = new Node(11, null, null);
n1.next = n2; n2.next = n3;
n2.random = n1; n3.random = n3;
const copied = copyRandomList(n1);
console.log(copied.val, copied.next.val, copied.next.next.val); // Output: 7 13 11
