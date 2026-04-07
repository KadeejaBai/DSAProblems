/*
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
The LCA of two nodes p and q is defined as the lowest node that has both p and q as descendants
(a node can be a descendant of itself).

Example 1:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3

Example 2:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5

Constraints:
    The number of nodes in the tree is in the range [2, 10^5].
    -10^9 <= Node.val <= 10^9
    All Node.val are unique.
    p != q
    p and q will exist in the tree.
*/

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
    if (!root || root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (left && right) return root;
    return left || right;
}

// Helper
function TreeNode(val, left, right) { this.val = val; this.left = left || null; this.right = right || null; }

// Example usage:
const n5 = new TreeNode(5);
const n1 = new TreeNode(1);
const root = new TreeNode(3, n5, n1);
console.log(lowestCommonAncestor(root, n5, n1).val); // Output: 3
