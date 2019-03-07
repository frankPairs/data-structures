class Queue {
  constructor() {
    this._storage = {};
    this._length = 0;
    this._headIndex = 0;
  }

  enqueue(value) {
    if (value !== undefined) {
      this._storage[this._length + this._headIndex] = value;
      this._length++;
    }
  }

  dequeue() {
    if (this._length === 0) {
      this._headIndex = 0;
      return undefined;
    }

    const value = this._storage[this._headIndex];

    delete this._storage[this._headIndex];
    this._length--;
    this._headIndex++;

    return value;
  }

  peek() {
    if (this._length === 0) {
      return undefined;
    }

    const value = this._storage[this._headIndex];

    return value;
  }
}

module.exports = Queue;
