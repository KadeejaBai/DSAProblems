/*
The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens
attack each other. Given an integer n, return all distinct solutions to the n-queens puzzle.
Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.'
both indicate a queen and an empty space, respectively.

Example 1:
Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]

Example 2:
Input: n = 1
Output: [["Q"]]

Constraints:
    1 <= n <= 9
*/

/**
 * @param {number} n
 * @return {string[][]}
 */
function solveNQueens(n) {
    const result = [];
    const cols = new Set(), diag1 = new Set(), diag2 = new Set();
    const board = Array.from({ length: n }, () => new Array(n).fill('.'));

    function backtrack(row) {
        if (row === n) {
            result.push(board.map(r => r.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) continue;
            board[row][col] = 'Q';
            cols.add(col); diag1.add(row - col); diag2.add(row + col);
            backtrack(row + 1);
            board[row][col] = '.';
            cols.delete(col); diag1.delete(row - col); diag2.delete(row + col);
        }
    }

    backtrack(0);
    return result;
}

// Example usage:
console.log(solveNQueens(4));
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
