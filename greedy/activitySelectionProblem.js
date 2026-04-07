/*
Given n activities with their start and end times, select the maximum number of activities that can be
performed by a single person, assuming that a person can only work on a single activity at a time.

Example 1:
Input: start = [1,3,0,5,8,5], end = [2,4,6,7,9,9]
Output: 4
Explanation: Activities (1,2), (3,4), (5,7), (8,9) can be selected.

Example 2:
Input: start = [10,12,20], end = [20,25,30]
Output: 1

Constraints:
    1 <= n <= 10^5
    0 <= start[i] < end[i] <= 10^9
*/

/**
 * @param {number[]} start
 * @param {number[]} end
 * @return {number}
 */
function activitySelection(start, end) {
    const n = start.length;
    // Create and sort activities by end time
    const activities = [];
    for (let i = 0; i < n; i++) activities.push([start[i], end[i]]);
    activities.sort((a, b) => a[1] - b[1]);

    let count = 1;
    let lastEnd = activities[0][1];

    for (let i = 1; i < n; i++) {
        if (activities[i][0] >= lastEnd) {
            count++;
            lastEnd = activities[i][1];
        }
    }
    return count;
}

// Example usage:
const start = [1, 3, 0, 5, 8, 5];
const end =   [2, 4, 6, 7, 9, 9];
console.log(activitySelection(start, end)); // Output: 4
