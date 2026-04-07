/*
Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support
all the functions of a normal stack (push, top, pop, and empty).

Implement the MyStack class:
- void push(int x) - Pushes element x to the top of the stack.
- int pop() - Removes the element on the top of the stack and returns it.
- int top() - Returns the element on the top of the stack.
- boolean empty() - Returns true if the stack is empty, false otherwise.

Example 1:
Input: ["MyStack","push","push","top","pop","empty"]
       [[],[1],[2],[],[],[]]
Output: [null,null,null,2,2,false]

Constraints:
    1 <= x <= 9
    At most 100 calls will be made to push, pop, top, and empty.
    All calls to pop and top are valid.

Follow-up: Can you implement the stack using only one queue?
*/

class MyStack {
    constructor() {
        this.queue = [];
    }

    /** @param {number} x @return {void} */
    push(x) {
        this.queue.push(x);
        // Rotate so new element is at front
        for (let i = 0; i < this.queue.length - 1; i++) {
            this.queue.push(this.queue.shift());
        }
    }

    /** @return {number} */
    pop() {
        return this.queue.shift();
    }

    /** @return {number} */
    top() {
        return this.queue[0];
    }

    /** @return {boolean} */
    empty() {
        return this.queue.length === 0;
    }
}

// Example usage:
const stack = new MyStack();
stack.push(1);
stack.push(2);
console.log(stack.top());   // Output: 2
console.log(stack.pop());   // Output: 2
console.log(stack.empty()); // Output: false
