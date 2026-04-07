/*
Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas.
The guards have gone and will come back in h hours.
Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and
eats k bananas from that pile. If the pile has less than k bananas, she eats all of them and will not
eat any more bananas during this hour.

Return the minimum integer k such that she can eat all the bananas within h hours.

Example 1:
Input: piles = [3,6,7,11], h = 8
Output: 4

Example 2:
Input: piles = [30,11,23,4,20], h = 5
Output: 30

Example 3:
Input: piles = [30,11,23,4,20], h = 6
Output: 23

Constraints:
    1 <= piles.length <= 10^4
    piles.length <= h <= 10^9
    1 <= piles[i] <= 10^9
*/

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
function minEatingSpeed(piles, h) {
    let left = 1, right = Math.max(...piles);

    function canFinish(speed) {
        let hours = 0;
        for (const pile of piles) {
            hours += Math.ceil(pile / speed);
        }
        return hours <= h;
    }

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canFinish(mid)) right = mid;
        else left = mid + 1;
    }
    return left;
}

// Example usage:
console.log(minEatingSpeed([3, 6, 7, 11], 8));     // Output: 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // Output: 30
