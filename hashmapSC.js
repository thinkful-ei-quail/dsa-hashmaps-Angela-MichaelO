class HashMap_SC {
  constructor(initialCapacity = 8) {
    this.length = 0;
    this._hashTable = [];
    this._capacity = initialCapacity;
  }

  get(key) {
    const hash = HashMap_SC._hashString(key);
    const index = hash % this._capacity;
    const slot = this._hashTable[index];

    if (slot === undefined) {
      throw new Error('Key Error');
    }

    for (let i = 0; i < slot.length; i++) {
      if (slot[i].key === key) {
        return slot[i].value;
      }
    }
  }

  // function that takes a string and hashes it
  static _hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      hash = (hash << 5) + hash + string.charCodeAt(i);
      hash = hash & hash;
    }
    return hash >>> 0;
  }

  set(key, value) {
    const loadRatio = (this.length + this._deleted + 1) / this._capacity;
    if (loadRatio > HashMap_SC.MAX_LOAD_RATIO) {
      this._resize(this._capacity * HashMap_SC.SIZE_RATIO);
    }

    const hash = HashMap_SC._hashString(key);
    const index = hash % this._capacity;

    if (!this._hashTable[index]) {
      this._hashTable[index] = [];
    }

    for (let i = 0; i < this._hashTable[index].length; i++) {
      if (this._hashTable[index][i].key === key) {
        return this._hashTable[index][i].value = value;
      }
    }

    this.length++;
    this._hashTable[index].push({
      key,
      value
    });
  }

  _resize(size) {
    const oldSlots = this._hashTable;
    this._capacity = size;
    this.length = 0;
    this._hashTable = [];

    for (const slot of oldSlots) {
      if (slot !== undefined) {
        slot.forEach(obj => this.set(obj.key, obj.value));
      }
    }
  }

  delete(key) {
    const hash = HashMap_SC._hashString(key);
    const index = hash % this._capacity;
    const slot = this._hashTable[index];

    if (slot === undefined) {
      throw new Error('Key Error');
    }

    for (let i = 0; i < slot.length; i++) {
      if (slot[i].key === key) {
        this.length--;
        this._hashTable[index].splice(i, 1);
        break;
      }
    }
  }
}

module.exports = HashMap_SC;