/*
Given a matrix and a target, return the number of non-empty submatrices that sum to target.
A submatrix x1, y1, x2, y2 is the set of all cells matrix[x][y] with x1 <= x <= x2 and y1 <= y <= y2.
Two submatrices (x1, y1, x2, y2) and (x1', y1', x2', y2') are different if they have some coordinate that is different.

Example 1:
Input: matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0
Output: 4

Example 2:
Input: matrix = [[1,-1],[-1,1]], target = 0
Output: 5

Constraints:
    1 <= matrix.length <= 100
    1 <= matrix[0].length <= 100
    -1000 <= matrix[i][j] <= 1000
    -10^8 <= target <= 10^8
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
function numSubmatrixSumTarget(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    let count = 0;

    // Compress rows: fix top row r1, compress into 1D
    for (let r1 = 0; r1 < m; r1++) {
        const colSum = new Array(n).fill(0);
        for (let r2 = r1; r2 < m; r2++) {
            for (let c = 0; c < n; c++) {
                colSum[c] += matrix[r2][c];
            }
            // Count subarrays in colSum that sum to target
            const prefixMap = new Map();
            prefixMap.set(0, 1);
            let prefixSum = 0;
            for (const val of colSum) {
                prefixSum += val;
                count += (prefixMap.get(prefixSum - target) || 0);
                prefixMap.set(prefixSum, (prefixMap.get(prefixSum) || 0) + 1);
            }
        }
    }
    return count;
}

// Example usage:
const matrix = [[0, 1, 0], [1, 1, 1], [0, 1, 0]];
console.log(numSubmatrixSumTarget(matrix, 0)); // Output: 4
