/*
A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge.
A node can only appear in the sequence at most once. The path does not need to pass through the root.
The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.

Example 1:
Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

Example 2:
Input: root = [-3]
Output: -3

Example 3:
Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.

Constraints:
    The number of nodes in the tree is in the range [1, 3 * 10^4].
    -1000 <= Node.val <= 1000
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxPathSum(root) {
    let maxSum = -Infinity;

    function maxGain(node) {
        if (!node) return 0;
        const leftGain = Math.max(maxGain(node.left), 0);
        const rightGain = Math.max(maxGain(node.right), 0);
        maxSum = Math.max(maxSum, node.val + leftGain + rightGain);
        return node.val + Math.max(leftGain, rightGain);
    }

    maxGain(root);
    return maxSum;
}

// Helper
function TreeNode(val, left, right) { this.val = val; this.left = left || null; this.right = right || null; }

// Example usage:
const root = new TreeNode(-10,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(maxPathSum(root)); // Output: 42
