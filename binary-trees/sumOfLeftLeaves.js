/*
Given the root of a binary tree, return the sum of all left leaves.
A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 24
Explanation: There are two left leaves: 9 and 15 with sum = 24.

Example 2:
Input: root = [1]
Output: 0

Constraints:
    The number of nodes in the tree is in the range [1, 1000].
    -1000 <= Node.val <= 1000
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
function sumOfLeftLeaves(root) {
    if (!root) return 0;

    function dfs(node, isLeft) {
        if (!node) return 0;
        if (!node.left && !node.right) return isLeft ? node.val : 0;
        return dfs(node.left, true) + dfs(node.right, false);
    }

    return dfs(root, false);
}

// Helper
function TreeNode(val, left, right) { this.val = val; this.left = left || null; this.right = right || null; }

// Example usage:
const root = new TreeNode(3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(sumOfLeftLeaves(root)); // Output: 24
