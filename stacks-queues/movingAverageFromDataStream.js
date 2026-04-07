/*
Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

Implement the MovingAverage class:
- MovingAverage(int size) Initializes the object with the size of the window size.
- double next(int val) Returns the moving average of the last size values of the stream.

Example 1:
Input: ["MovingAverage","next","next","next","next"]
       [[3],[1],[10],[3],[5]]
Output: [null,1.0,5.5,4.66667,6.0]

Constraints:
    1 <= size <= 1000
    -10^5 <= val <= 10^5
    At most 10^4 calls will be made to next.
*/

class MovingAverage {
    /**
     * @param {number} size
     */
    constructor(size) {
        this.size = size;
        this.queue = [];
        this.sum = 0;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    next(val) {
        if (this.queue.length === this.size) {
            this.sum -= this.queue.shift();
        }
        this.queue.push(val);
        this.sum += val;
        return this.sum / this.queue.length;
    }
}

// Example usage:
const ma = new MovingAverage(3);
console.log(ma.next(1));  // Output: 1.0
console.log(ma.next(10)); // Output: 5.5
console.log(ma.next(3));  // Output: 4.666...
console.log(ma.next(5));  // Output: 6.0
