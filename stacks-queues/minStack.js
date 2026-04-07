/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:
- MinStack() initializes the stack object.
- void push(int val) - Pushes the element val onto the stack.
- void pop() - Removes the element on the top of the stack.
- int top() - Gets the top element of the stack.
- int getMin() - Retrieves the minimum element in the stack.

You must implement a solution with O(1) time complexity for each function.

Example 1:
Input: ["MinStack","push","push","push","getMin","pop","top","getMin"]
       [[],[-2],[0],[-3],[],[],[],[]]
Output: [null,null,null,null,-3,null,0,-2]

Constraints:
    -2^31 <= val <= 2^31 - 1
    Methods pop, top and getMin operations will always be called on non-empty stacks.
    At most 3 * 10^4 calls will be made to push, pop, top, and getMin.
*/

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /** @param {number} val @return {void} */
    push(val) {
        this.stack.push(val);
        const min = this.minStack.length === 0 ? val : Math.min(val, this.minStack[this.minStack.length - 1]);
        this.minStack.push(min);
    }

    /** @return {void} */
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /** @return {number} */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /** @return {number} */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

// Example usage:
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // Output: -3
minStack.pop();
console.log(minStack.top());    // Output: 0
console.log(minStack.getMin()); // Output: -2
