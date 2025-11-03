/**
 * @class HashMap
 * A hash map to store strings
 */
class HashMap {
  #capacity;
  #loadFactor;
  constructor() {
    this.#capacity = 16;
    this.#loadFactor = 0.75;
  }

  static #hash(key) {
    let hashCode = 0;

    const primeNumber = 31; 
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode %= capacity; // prevents exceeding JS max integer value which causes imprecision
    }

    return hashCode;
  }

  #handleBoundsError(index) {
    if (index < 0 || index >= buckets.length)
      throw new Error("Trying to access index out of bounds");
  }
}

export {
  HashMap,
};