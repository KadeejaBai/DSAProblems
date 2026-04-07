/*
Given a binary tree, determine if it is height-balanced.
A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node
never differs by more than one.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:
Input: root = []
Output: true

Constraints:
    The number of nodes in the tree is in the range [0, 5000].
    -10^4 <= Node.val <= 10^4
*/

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isBalanced(root) {
    function getHeight(node) {
        if (!node) return 0;
        const left = getHeight(node.left);
        if (left === -1) return -1;
        const right = getHeight(node.right);
        if (right === -1) return -1;
        if (Math.abs(left - right) > 1) return -1;
        return Math.max(left, right) + 1;
    }
    return getHeight(root) !== -1;
}

// Helper
function TreeNode(val, left, right) { this.val = val; this.left = left || null; this.right = right || null; }

// Example usage:
const root1 = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(isBalanced(root1)); // Output: true

const root2 = new TreeNode(1,
    new TreeNode(2, new TreeNode(3, new TreeNode(4), new TreeNode(4)), new TreeNode(3)),
    new TreeNode(2)
);
console.log(isBalanced(root2)); // Output: false
