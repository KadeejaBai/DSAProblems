/*
Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.
Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

Example 1:
Input: root = [1,7,0,7,-8,null,null]
Output: 2
Explanation:
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return level 2.

Example 2:
Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
Output: 2

Constraints:
    The number of nodes in the tree is in the range [1, 10^4].
    -10^5 <= Node.val <= 10^5
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxLevelSum(root) {
    let maxSum = -Infinity;
    let maxLevel = 1;
    let level = 0;
    const queue = [root];

    while (queue.length) {
        level++;
        const size = queue.length;
        let levelSum = 0;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            levelSum += node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        if (levelSum > maxSum) { maxSum = levelSum; maxLevel = level; }
    }
    return maxLevel;
}

// Helper
function TreeNode(val, left, right) { this.val = val; this.left = left || null; this.right = right || null; }

// Example usage:
const root = new TreeNode(1,
    new TreeNode(7, new TreeNode(7), new TreeNode(-8)),
    new TreeNode(0)
);
console.log(maxLevelSum(root)); // Output: 2
