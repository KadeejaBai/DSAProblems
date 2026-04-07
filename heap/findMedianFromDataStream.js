/*
The median is the middle value in an ordered integer list. If the size of the list is even, there is no
middle value, and the median is the mean of the two middle values.

Implement the MedianFinder class:
- MedianFinder() initializes the MedianFinder object.
- void addNum(int num) adds the integer num from the data stream to the data structure.
- double findMedian() returns the median of all elements so far.

Example 1:
Input: ["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]
       [[],[1],[2],[],[3],[]]
Output: [null,null,null,1.5,null,2.0]

Constraints:
    -10^5 <= num <= 10^5
    There will be at least one element in the data structure before calling findMedian.
    At most 5 * 10^4 calls will be made to addNum and findMedian.
*/

/**
 * Uses a max-heap for the lower half and a min-heap for the upper half.
 * Since JS doesn't have built-in heaps, we simulate with sorted insertion.
 */
class MedianFinder {
    constructor() {
        this.data = [];
    }

    /** @param {number} num @return {void} */
    addNum(num) {
        // Binary search insertion to maintain sorted order
        let left = 0, right = this.data.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (this.data[mid] < num) left = mid + 1;
            else right = mid;
        }
        this.data.splice(left, 0, num);
    }

    /** @return {number} */
    findMedian() {
        const n = this.data.length;
        if (n % 2 === 1) return this.data[Math.floor(n / 2)];
        return (this.data[n / 2 - 1] + this.data[n / 2]) / 2;
    }
}

// Example usage:
const mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
console.log(mf.findMedian()); // Output: 1.5
mf.addNum(3);
console.log(mf.findMedian()); // Output: 2.0
