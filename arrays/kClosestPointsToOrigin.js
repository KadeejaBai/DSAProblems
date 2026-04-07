/*
Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k,
return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance (√(x² + y²)).

Example 1:
Input: points = [[1,3],[-2,2]], k = 1
Output: [[-2,2]]
Explanation: The distance from (1,3) to origin is √10. The distance from (-2,2) to origin is √8. Closest is (-2,2).

Example 2:
Input: points = [[3,3],[5,-1],[-2,4]], k = 2
Output: [[3,3],[-2,4]]

Constraints:
    1 <= k <= points.length <= 10^4
    -10^4 <= xi, yi <= 10^4
*/

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
function kClosest(points, k) {
    // Sort by squared Euclidean distance (no need for sqrt)
    points.sort((a, b) => (a[0] ** 2 + a[1] ** 2) - (b[0] ** 2 + b[1] ** 2));
    return points.slice(0, k);
}

// Example usage:
console.log(kClosest([[1, 3], [-2, 2]], 1));             // Output: [[-2, 2]]
console.log(kClosest([[3, 3], [5, -1], [-2, 4]], 2));    // Output: [[3,3],[-2,4]]
