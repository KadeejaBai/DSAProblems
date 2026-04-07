/*
The next greater element of some element x in an array is the first greater element that is to the right
of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next
greater element of nums2[j] in nums2. If there is no next greater element, return -1 for this query.

Example 1:
Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation:
- 4's next greater: none → -1
- 1's next greater: 3 → 3
- 2's next greater: none → -1

Example 2:
Input: nums1 = [2,4], nums2 = [1,2,3,4]
Output: [3,-1]

Constraints:
    1 <= nums1.length <= nums2.length <= 1000
    0 <= nums1[i], nums2[i] <= 10^4
    All integers in nums1 and nums2 are unique.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function nextGreaterElement(nums1, nums2) {
    const stack = [];
    const map = new Map();

    for (const num of nums2) {
        while (stack.length > 0 && stack[stack.length - 1] < num) {
            map.set(stack.pop(), num);
        }
        stack.push(num);
    }

    return nums1.map(num => map.get(num) || -1);
}

// Example usage:
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // Output: [-1, 3, -1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));    // Output: [3, -1]
