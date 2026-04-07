/*
Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree
and inorder is the inorder traversal of the same tree, construct and return the binary tree.

Example 1:
Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]

Example 2:
Input: preorder = [-1], inorder = [-1]
Output: [-1]

Constraints:
    1 <= preorder.length <= 3000
    inorder.length == preorder.length
    -3000 <= preorder[i], inorder[i] <= 3000
    preorder and inorder consist of unique values.
    Each value of inorder also appears in preorder.
    preorder is guaranteed to be the preorder traversal of the tree.
    inorder is guaranteed to be the inorder traversal of the tree.
*/

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
    const inorderMap = new Map();
    inorder.forEach((val, idx) => inorderMap.set(val, idx));
    let preIdx = 0;

    function build(left, right) {
        if (left > right) return null;
        const rootVal = preorder[preIdx++];
        const node = new TreeNode(rootVal);
        const mid = inorderMap.get(rootVal);
        node.left = build(left, mid - 1);
        node.right = build(mid + 1, right);
        return node;
    }

    return build(0, inorder.length - 1);
}

// Helper
function TreeNode(val, left, right) { this.val = val; this.left = left || null; this.right = right || null; }

// Example usage:
const root = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
console.log(root.val);        // Output: 3
console.log(root.left.val);   // Output: 9
console.log(root.right.val);  // Output: 20
