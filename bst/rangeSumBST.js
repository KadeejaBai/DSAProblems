/*
Given the root node of a binary search tree and two integers low and high, return the sum of values of
all nodes with a value in the inclusive range [low, high].

Example 1:
Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
Output: 32
Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

Example 2:
Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
Output: 23
Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.

Constraints:
    The number of nodes in the tree is in the range [1, 2 * 10^4].
    1 <= Node.val <= 10^5
    1 <= low <= high <= 10^5
    All Node.val are unique.
*/

/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function rangeSumBST(root, low, high) {
    if (!root) return 0;
    let sum = 0;
    if (root.val >= low && root.val <= high) sum += root.val;
    if (root.val > low) sum += rangeSumBST(root.left, low, high);
    if (root.val < high) sum += rangeSumBST(root.right, low, high);
    return sum;
}

// Helper
function TreeNode(val, left, right) { this.val = val; this.left = left || null; this.right = right || null; }

// Example usage:
const root = new TreeNode(10,
    new TreeNode(5, new TreeNode(3), new TreeNode(7)),
    new TreeNode(15, null, new TreeNode(18))
);
console.log(rangeSumBST(root, 7, 15)); // Output: 32
