import { LinkedList } from "./linkedList.js";

/**
 * @class HashSet
 * Stores strings. Note that other types of keys are not supported 
 * in this implementation.  
 */
class HashSet {
  #arr;
  #capacity;
  #loadFactor;

  static BASE_CAPACITY = 16;
  static LOAD_FACTOR = 0.75;

  constructor() {
    this.#capacity = HashSet.BASE_CAPACITY;
    this.#loadFactor = HashSet.LOAD_FACTOR;
    this.#arr = Array.from({ length: this.#capacity }, () => new LinkedList());
  }

  set(value) {
    const hashCode = this.#hash(value);
    this.#handleBoundsError(hashCode);
    const bucket = this.#arr[hashCode]; 

    // check if `key` was hashed here already. only add it if not
    const locationIndex = bucket.find(value);
    if (locationIndex === null) { 
      bucket.append(value);
    } 

    const threshold = this.#capacity * this.#loadFactor;
    if (this.length() > threshold) {
      const values = this.values(); // save values before clearing and expanding the array

      this.#capacity *= 2;
      this.#arr = Array.from({ length: this.#capacity }, () => new LinkedList());

      values.forEach((value) => {
        this.set(value);
      });
    }
  }

  has(value) {
    const hashCode = this.#hash(value);
    this.#handleBoundsError(hashCode);
    const bucket = this.#arr[hashCode];

    return bucket.contains(value);
  }

  remove(value) {
    const hashCode = this.#hash(value);
    this.#handleBoundsError(hashCode);
    const bucket = this.#arr[hashCode];

    const locationIdx = bucket.find(value);
    if (locationIdx === null) {
      return false;
    }
    else {
      bucket.removeAt(locationIdx);
      return true;
    }
  }

  length() {
    return this.#arr.reduce((total, bucket) => total + bucket.size(), 0);
  }

  clear() {
    this.#capacity = HashSet.BASE_CAPACITY;
    this.#arr = Array.from({ length: this.#capacity }, () => new LinkedList());  
  }

  values() {
    return this.#arr
      .map((bucket) => bucket.toArray())
      .flat();
  }

  toString() {
    let str = ""
    for (let i = 0; i < this.#capacity; i++) {
      str += `index ${i}: ${this.#arr[i].toString()}\n`;
    } // using .reduce doesn't register the new lines, oddly
    return str;
  }

  #hash(value) {
    let hashCode = 0;

    const primeNumber = 31; 
    for (let i = 0; i < value.length; i++) {
      hashCode = primeNumber * hashCode + value.charCodeAt(i);
      hashCode %= this.#capacity; // prevents exceeding JS max integer value which causes imprecision
    }

    return hashCode;
  }

  #handleBoundsError(index) {
    if (index < 0 || index >= this.#arr.length)
      throw new Error("Trying to access index out of bounds");
  }

  // for testing
  get capacity() {
    return this.#capacity;
  }}

export {
  HashSet,
};