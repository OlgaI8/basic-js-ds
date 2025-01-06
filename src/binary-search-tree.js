const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  root() {
    let rootData = this.root;
    return rootData.data;
  }

  add(data) {
    let addNode = new Node(data);

    const searchBT = node => {
      if (!node) {
        return addNode;
      }

      if (data < node.data) {
        if (!node.left) {
          node.left = addNode;
        } else {
          searchBT(node.left);
        }
      }

      else if (data > node.data) {
        if (!node.right) {
          node.right = addNode;
        } else {
          searchBT(node.right);
        }
      }
      return node;
    }

    this.root = searchBT(this.root);
  }

  has(data) {
    let currentNode = this.root;

    while (currentNode) {

      if (data === currentNode.data) {
        return true;
      }

      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  find(data) {
    let currentNode = this.root;

    while (currentNode) {

      if (data === currentNode.data) {
        return currentNode.data;
      }

      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  remove(data) {
    const removeNodeByData = node => {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNodeByData(node.left);
        return node;
      } else if (data > node.data) {
        node.right = removeNodeByData(node.right);
        return node;
      } else {

        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxLeftNode = node.left;

        while (maxLeftNode.right) {
          maxLeftNode = maxLeftNode.right;
        }

        node.data = maxLeftNode.data;
        node.left = removeNodeByData(node.left);
        return node;
      }
    }
    this.root = removeNodeByData(this.root);
  }

  min() {
    let currentNode = this.root;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    let currentNode = this.root;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};