/*
Serialization is the process of converting a data structure or object into a sequence of bits so that it
can be stored in a file or memory buffer, or transmitted across a network. The object can then be
reconstructed later (deserialization).

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your
serialization/deserialization algorithm should work.

Example 1:
Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]

Example 2:
Input: root = []
Output: []

Constraints:
    The number of nodes in the tree is in the range [0, 10^4].
    -1000 <= Node.val <= 1000
*/

/**
 * Encodes a tree to a single string.
 * @param {TreeNode} root
 * @return {string}
 */
function serialize(root) {
    if (!root) return 'null';
    return root.val + ',' + serialize(root.left) + ',' + serialize(root.right);
}

/**
 * Decodes your encoded data to tree.
 * @param {string} data
 * @return {TreeNode}
 */
function deserialize(data) {
    const vals = data.split(',');
    let idx = 0;

    function build() {
        if (vals[idx] === 'null') { idx++; return null; }
        const node = new TreeNode(parseInt(vals[idx++]));
        node.left = build();
        node.right = build();
        return node;
    }

    return build();
}

// Helper
function TreeNode(val, left, right) { this.val = val; this.left = left || null; this.right = right || null; }

// Example usage:
const root = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)));
const serialized = serialize(root);
console.log(serialized);                            // Output: "1,2,null,null,3,4,null,null,5,null,null"
const deserialized = deserialize(serialized);
console.log(deserialized.val);                      // Output: 1
console.log(deserialized.right.left.val);           // Output: 4
