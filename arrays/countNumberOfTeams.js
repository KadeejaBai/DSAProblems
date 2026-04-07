/*
There are n soldiers standing in a line. Each soldier is assigned a unique rating value.
You have to form a team of 3 soldiers amongst them under the following rules:
Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
A team is valid if: (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k])
where (0 <= i < j < k < n).
Return the number of teams you can form given the conditions.

Example 1:
Input: rating = [2,5,3,4,1]
Output: 3
Explanation: We can form three teams given the conditions. (2,3,4), (5,4,1), (5,3,1).

Example 2:
Input: rating = [2,1,3]
Output: 0

Example 3:
Input: rating = [1,2,3,4]
Output: 4

Constraints:
    n == rating.length
    3 <= n <= 1000
    1 <= rating[i] <= 10^5
    All the integers in rating are unique.
*/

/**
 * @param {number[]} rating
 * @return {number}
 */
function numTeams(rating) {
    let count = 0;
    const n = rating.length;

    for (let j = 1; j < n - 1; j++) {
        let leftLess = 0, leftGreater = 0;
        let rightLess = 0, rightGreater = 0;

        for (let i = 0; i < j; i++) {
            if (rating[i] < rating[j]) leftLess++;
            if (rating[i] > rating[j]) leftGreater++;
        }
        for (let k = j + 1; k < n; k++) {
            if (rating[k] < rating[j]) rightLess++;
            if (rating[k] > rating[j]) rightGreater++;
        }
        count += leftLess * rightGreater + leftGreater * rightLess;
    }
    return count;
}

// Example usage:
const rating = [2, 5, 3, 4, 1];
console.log(numTeams(rating)); // Output: 3
