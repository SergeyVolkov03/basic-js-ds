const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    this.head = addData(this.head, data);

    function addData(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data == data) {
        return node;
      }
      if (data < node.data) {
        node.left = addData(node.left, data);
      } else {
        node.right = addData(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return hasData(this.head, data);
    function hasData(node, data) {
      if (!node) {
        return false;
      }
      if (node.data == data) {
        return true;
      }
      if (data < node.data) {
        return hasData(node.left, data);
      } else {
        return hasData(node.right, data);
      }
    }
  }

  find(data) {
    return searchData(this.head, data);
    function searchData(node, data) {
      if (!node) {
        return null;
      }
      if (node.data == data) {
        return node;
      }
      if (data < node.data) {
        return searchData(node.left, data);
      } else {
        return searchData(node.right, data);
      }
    }
  }

  remove(data) {
    this.head = removeData(this.head, data);
    function removeData(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeData(node.right, data);
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

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeData(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.head) {
      return;
    }
    let node = this.head;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.head) {
      return;
    }
    let node = this.head;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
