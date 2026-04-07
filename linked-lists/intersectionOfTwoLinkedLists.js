/*
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect.
If the two linked lists have no intersection at all, return null.

Example 1:
Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at '8'

Example 2:
Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Intersected at '2'

Example 3:
Input: intersectVal = 0, listA = [2,6,4], listB = [1,5]
Output: No intersection

Constraints:
    The number of nodes of listA is m.
    The number of nodes of listB is n.
    1 <= m, n <= 3 * 10^4
    The values are in range [1, 10^9].

Follow up: Could you write a solution that runs in O(m + n) time and use only O(1) memory?
*/

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode|null}
 */
function getIntersectionNode(headA, headB) {
    let a = headA;
    let b = headB;
    // When pointers reach end, redirect to other list's head
    // They will meet at intersection or both reach null
    while (a !== b) {
        a = a === null ? headB : a.next;
        b = b === null ? headA : b.next;
    }
    return a;
}

// Helper
function ListNode(val, next) { this.val = val; this.next = next || null; }

// Example usage:
const shared = new ListNode(8, new ListNode(4, new ListNode(5)));
const headA = new ListNode(4, new ListNode(1, shared));
const headB = new ListNode(5, new ListNode(6, new ListNode(1, shared)));
const result = getIntersectionNode(headA, headB);
console.log(result ? result.val : null); // Output: 8
