/*
Given an array arr of distinct elements of size n, rearrange the elements of array in a zig-zag fashion
such that the converted array should be in the below form:
arr[0] < arr[1] > arr[2] < arr[3] > arr[4] < ...

Example 1:
Input: arr = [4, 3, 7, 8, 6, 2, 1]
Output: [3, 7, 4, 8, 2, 6, 1]
Explanation: 3 < 7 > 4 < 8 > 2 < 6 > 1

Example 2:
Input: arr = [1, 4, 3, 2]
Output: [1, 4, 2, 3]
Explanation: 1 < 4 > 2 < 3

Constraints:
    1 <= n <= 10^5
    0 <= arr[i] <= 10^6
    All elements are distinct.
*/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function convertToZigZag(arr) {
    // At even indices, element should be less than neighbors
    // At odd indices, element should be greater than neighbors
    for (let i = 0; i < arr.length - 1; i++) {
        if (i % 2 === 0) {
            // Even index: should be smaller
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        } else {
            // Odd index: should be larger
            if (arr[i] < arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        }
    }
    return arr;
}

// Example usage:
const arr = [4, 3, 7, 8, 6, 2, 1];
console.log(convertToZigZag(arr)); // Output: [3,7,4,8,2,6,1]
