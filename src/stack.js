const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {

  constructor() {
    this.head = null;
    this.length = 0;
  }
  push(element) {
    const stackNode = new StackNode(element);

    if (this.head) {
      stackNode.next = this.head;
      this.head = stackNode;
    } else {
      this.head = stackNode;
    }
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    } else {
      const current = this.head;
      this.head = this.head.next;
      this.length--;
      return current.value;
    }
  }

  peek() {
    const current = this.head;
    return current.value;
  }
}

module.exports = {
  Stack
};
