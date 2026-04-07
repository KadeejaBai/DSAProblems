/*
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support
all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:
- void push(int x) - Push element x to the back of the queue.
- int pop() - Removes the element from the front of the queue and returns it.
- int peek() - Returns the element at the front of the queue.
- boolean empty() - Returns true if the queue is empty, false otherwise.

Example 1:
Input: ["MyQueue","push","push","peek","pop","empty"]
       [[],[1],[2],[],[],[]]
Output: [null,null,null,1,1,false]

Constraints:
    1 <= x <= 9
    At most 100 calls will be made to push, pop, peek, and empty.
    All calls to pop and peek are valid.

Follow-up: Can you implement the queue such that each operation is amortized O(1) time complexity?
*/

class MyQueue {
    constructor() {
        this.inbox = [];  // for push
        this.outbox = []; // for pop/peek
    }

    /** @param {number} x @return {void} */
    push(x) {
        this.inbox.push(x);
    }

    /** @return {number} */
    pop() {
        if (this.outbox.length === 0) {
            while (this.inbox.length > 0) {
                this.outbox.push(this.inbox.pop());
            }
        }
        return this.outbox.pop();
    }

    /** @return {number} */
    peek() {
        if (this.outbox.length === 0) {
            while (this.inbox.length > 0) {
                this.outbox.push(this.inbox.pop());
            }
        }
        return this.outbox[this.outbox.length - 1];
    }

    /** @return {boolean} */
    empty() {
        return this.inbox.length === 0 && this.outbox.length === 0;
    }
}

// Example usage:
const queue = new MyQueue();
queue.push(1);
queue.push(2);
console.log(queue.peek());  // Output: 1
console.log(queue.pop());   // Output: 1
console.log(queue.empty()); // Output: false
