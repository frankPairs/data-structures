class LinkedList {
  constructor(value) {
    this._head = value ? { value, next: null } : null;
    this._tail = this._head;
    this._cursor = this._head;
  }

  insert(value) {
    if (this._head === null) {
      this._head = { value, next: null };
      this._tail = this._head;
      return;
    }

    const node = { value, next: null };

    this._tail.next = node;
    this._tail = node;
    return;
  }

  contains(value) {
    let currentNode = this._head;

    while (currentNode.value !== value && currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    return currentNode.value === value;
  }

  remove(node) {
    let currentNode = this._head;

    while (currentNode.next !== node && currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    if (currentNode !== null) {
      currentNode.next = node.next;
    }
  }

  removeTail() {
    let currentNode = this._head;

    while (currentNode.next !== this._tail && currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    if (currentNode.next !== null) {
      currentNode.next = null;
      this._tail = currentNode;
    }
  }

  isHead(node) {
    return node === this._head;
  }

  isTail(node) {
    return node === this._tail;
  }
}

module.exports = LinkedList;
