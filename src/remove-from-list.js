const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(value) {

    if (this.length === 0) {
      this.head = new ListNode(value);
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = new ListNode(value);
    }
    this.length++;
  }

  remove(value) {
    if (!this.head) {
      return null;
    }

    let removeNode = null;

    while (this.head && this.head.value === value) {
      removeNode = this.head;
      this.head = this.head.next;
      this.length--;
    }

    let current = this.head;

    if (current !== null) {
      while (current.next) {
        if (current.next.value === value) {
          removeNode = current.next;
          current.next = current.next.next;
          this.length--;
        } else {
          current = current.next;
        }
      }
    }
    return removeNode;
  }
}

function removeKFromList(l, k) {
  let linkedList = new SinglyLinkedList();

  for (let value of l) {
    linkedList.add(value);
  }

  linkedList.remove(k);
  return linkedList;
}

module.exports = {
  removeKFromList
};
