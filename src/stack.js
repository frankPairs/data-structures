class Stack {
  constructor() {
    this._storage = {};
    this._length = 0;
  }

  push(value) {
    if (value !== undefined) {
      this._storage[this._length] = value;
      this._length++;
    }
  }

  pop() {
    if (this._length === 0) {
      return undefined;
    }

    const cursor = this._length - 1;
    const value = this._storage[cursor];

    delete this._storage[cursor];
    this._length--;

    return value;
  }

  peek() {
    if (this._length === 0) {
      return undefined;
    }

    const cursor = this._length - 1;
    const value = this._storage[cursor];

    return value;
  }
}

module.exports = Stack;
