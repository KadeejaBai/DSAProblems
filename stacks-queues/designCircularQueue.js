/*
Design your implementation of the circular queue. The circular queue is a linear data structure in which
the operations are performed based on FIFO principle, and the last position is connected back to the first
position to make a circle.

Implement the MyCircularQueue class:
- MyCircularQueue(k) Initializes the object with the size of the queue to be k.
- boolean enQueue(int value) Inserts an element into the circular queue. Return true if successful.
- boolean deQueue() Deletes an element from the circular queue. Return true if successful.
- int Front() Gets the front item from the queue. If empty, return -1.
- int Rear() Gets the last item from the queue. If empty, return -1.
- boolean isEmpty() Checks whether the circular queue is empty or not.
- boolean isFull() Checks whether the circular queue is full or not.

Example 1:
Input: ["MyCircularQueue","enQueue","enQueue","enQueue","enQueue","Rear","isFull","deQueue","enQueue","Rear"]
       [[3],[1],[2],[3],[4],[],[],[],[4],[]]
Output: [null,true,true,true,false,3,true,true,true,4]

Constraints:
    1 <= k <= 1000
    0 <= value <= 1000
    At most 3000 calls will be made to enQueue, deQueue, Front, Rear, isEmpty, and isFull.
*/

class MyCircularQueue {
    constructor(k) {
        this.size = k;
        this.queue = new Array(k);
        this.head = 0;
        this.tail = 0;
        this.count = 0;
    }
    enQueue(value) {
        if (this.isFull()) return false;
        this.queue[this.tail] = value;
        this.tail = (this.tail + 1) % this.size;
        this.count++;
        return true;
    }
    deQueue() {
        if (this.isEmpty()) return false;
        this.head = (this.head + 1) % this.size;
        this.count--;
        return true;
    }
    Front() { return this.isEmpty() ? -1 : this.queue[this.head]; }
    Rear() { return this.isEmpty() ? -1 : this.queue[(this.tail - 1 + this.size) % this.size]; }
    isEmpty() { return this.count === 0; }
    isFull() { return this.count === this.size; }
}

// Example usage:
const cq = new MyCircularQueue(3);
console.log(cq.enQueue(1)); // true
console.log(cq.enQueue(2)); // true
console.log(cq.enQueue(3)); // true
console.log(cq.enQueue(4)); // false
console.log(cq.Rear());     // 3
console.log(cq.isFull());   // true
console.log(cq.deQueue());  // true
console.log(cq.enQueue(4)); // true
console.log(cq.Rear());     // 4
