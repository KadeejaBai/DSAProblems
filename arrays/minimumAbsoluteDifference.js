/*
Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference
of any two elements.

Return a list of pairs in ascending order (with respect to pairs), each pair [a, b] follows:
- a, b are from arr
- a < b
- b - a equals the minimum absolute difference of any two elements in arr

Example 1:
Input: arr = [4,2,1,3]
Output: [[1,2],[2,3],[3,4]]

Example 2:
Input: arr = [1,3,6,10,15]
Output: [[1,3]]

Example 3:
Input: arr = [3,8,-10,23,19,-4,-14,27]
Output: [[-14,-10],[19,23],[23,27]]

Constraints:
    2 <= arr.length <= 10^5
    -10^6 <= arr[i] <= 10^6
*/

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
function minimumAbsDifference(arr) {
    arr.sort((a, b) => a - b);
    let minDiff = Infinity;
    for (let i = 1; i < arr.length; i++) {
        minDiff = Math.min(minDiff, arr[i] - arr[i - 1]);
    }
    const result = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] === minDiff) {
            result.push([arr[i - 1], arr[i]]);
        }
    }
    return result;
}

// Example usage:
const arr = [4, 2, 1, 3];
console.log(minimumAbsDifference(arr)); // Output: [[1,2],[2,3],[3,4]]
