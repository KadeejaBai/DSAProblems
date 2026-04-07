/*
Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.
Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

Example 1:
Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
Explanation: Node 1's value is 1 (its neighbors are 2 and 4).

Example 2:
Input: adjList = [[]]
Output: [[]]

Example 3:
Input: adjList = []
Output: []

Constraints:
    The number of nodes in the graph is in the range [0, 100].
    1 <= Node.val <= 100
    Node.val is unique for each node.
    There are no self-loops or repeated edges.
*/

/**
 * @param {Node} node
 * @return {Node}
 */
function cloneGraph(node) {
    if (!node) return null;
    const map = new Map();

    function dfs(curr) {
        if (map.has(curr)) return map.get(curr);
        const clone = new GraphNode(curr.val);
        map.set(curr, clone);
        for (const neighbor of curr.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }
        return clone;
    }

    return dfs(node);
}

// Helper
function GraphNode(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
}

// Example usage:
const n1 = new GraphNode(1);
const n2 = new GraphNode(2);
const n3 = new GraphNode(3);
n1.neighbors = [n2, n3];
n2.neighbors = [n1];
n3.neighbors = [n1];
const cloned = cloneGraph(n1);
console.log(cloned.val);               // Output: 1
console.log(cloned.neighbors[0].val);  // Output: 2
