class HashTable {
  constructor(size) {
    this._storage = [];
    this._tableSize = size;
  }

  insert(key, value) {
    const index = this._hash(key, this._tableSize);

    if (!this._storage[index]) {
      this._storage[index] = [];
    }

    this._storage[index].push([key, value]);
  }

  remove(key) {
    const index = this._hash(key, this._tableSize);
    const array = this._storage[index];

    if (!array) {
      return null;
    }

    for (let i = 0; i < array.length; i++) {
      const arrayKey = array[i][0];

      if (arrayKey === key) {
        const itemRemoved = array[i];

        array.splice(i, index);
        return itemRemoved;
      }
    }

    return null;
  }

  retrieve(key) {
    const index = this._hash(key, this._tableSize);
    const array = this._storage[index];

    if (!array) {
      return null;
    }

    for (let i = 0; i < array.length; i++) {
      const arrayKey = array[i][0];

      if (arrayKey === key) {
        return array[i][1];
      }
    }

    return null;
  }

  _hash(str, n) {
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i) * 3;
    }

    return sum % n;
  }
}

module.exports = HashTable;
