/*
Given the root of a binary tree, flatten the tree into a "linked list":
The "linked list" should use the same TreeNode class where the right child pointer points to the next node
in the list and the left child pointer is always null.
The "linked list" should be in the same order as a pre-order traversal of the binary tree.

Example 1:
Input: root = [1,2,5,3,4,null,6]
Output: [1,null,2,null,3,null,4,null,5,null,6]

Example 2:
Input: root = []
Output: []

Constraints:
    The number of nodes in the tree is in the range [0, 2000].
    -100 <= Node.val <= 100

Follow up: Can you flatten the tree in-place (with O(1) extra space)?
*/

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
function flatten(root) {
    let curr = root;
    while (curr !== null) {
        if (curr.left !== null) {
            // Find rightmost node of left subtree
            let rightmost = curr.left;
            while (rightmost.right !== null) rightmost = rightmost.right;
            // Connect right subtree to rightmost of left
            rightmost.right = curr.right;
            curr.right = curr.left;
            curr.left = null;
        }
        curr = curr.right;
    }
}

// Helper
function TreeNode(val, left, right) { this.val = val; this.left = left || null; this.right = right || null; }

// Example usage:
const root = new TreeNode(1,
    new TreeNode(2, new TreeNode(3), new TreeNode(4)),
    new TreeNode(5, null, new TreeNode(6))
);
flatten(root);
const res = [];
let node = root;
while (node) { res.push(node.val); node = node.right; }
console.log(res); // Output: [1, 2, 3, 4, 5, 6]
