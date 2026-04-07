/*
Given an integer array arr, remove a subarray (can be empty) from arr such that the remaining elements
in arr are non-decreasing. Return the length of the shortest subarray to remove.

Example 1:
Input: arr = [1,2,3,10,4,2,3,5]
Output: 3
Explanation: The shortest subarray we can remove is [10,4,2] of length 3.
The remaining elements after that will be [1,2,3,3,5] which are sorted.

Example 2:
Input: arr = [5,4,3,2,1]
Output: 4

Example 3:
Input: arr = [1,2,3]
Output: 0

Constraints:
    1 <= arr.length <= 10^5
    0 <= arr[i] <= 10^9
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
function findLengthOfShortestSubarray(arr) {
    const n = arr.length;
    let left = 0;
    while (left < n - 1 && arr[left] <= arr[left + 1]) left++;

    if (left === n - 1) return 0; // Already sorted

    let right = n - 1;
    while (right > 0 && arr[right - 1] <= arr[right]) right--;

    // Option 1: remove everything from left+1 to end
    // Option 2: remove everything from beginning to right-1
    let result = Math.min(n - left - 1, right);

    // Option 3: keep prefix [0..i] and suffix [j..n-1] and remove middle
    let i = 0, j = right;
    while (i <= left && j < n) {
        if (arr[i] <= arr[j]) {
            result = Math.min(result, j - i - 1);
            i++;
        } else {
            j++;
        }
    }
    return result;
}

// Example usage:
const arr = [1, 2, 3, 10, 4, 2, 3, 5];
console.log(findLengthOfShortestSubarray(arr)); // Output: 3
