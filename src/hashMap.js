import { LinkedList } from "./linkedList.js";

/**
 * @class HashMap
 * Stores string-value pairs. Note that other types of keys are not supported 
 * in this implementation.  
 */
class HashMap {
  #arr;
  #capacity;
  #loadFactor;

  static BASE_CAPACITY = 16;
  static LOAD_FACTOR = 0.75;

  constructor() {
    this.#capacity = HashMap.BASE_CAPACITY;
    this.#loadFactor = HashMap.LOAD_FACTOR;
    this.#arr = Array.from({ length: this.#capacity }, () => new LinkedList());
  }

  set(key, value) {
    const hashCode = this.#hash(key);
    this.#handleBoundsError(hashCode);
    const bucket = this.#arr[hashCode]; 

    // check if `key` was hashed here already. if so, update
    const locationIndex = bucket.find(key, "key");
    if (locationIndex === null) { // create
      const entry = new Pair(key, value);
      bucket.append(entry);
    } 
    else { // update
      const entry = bucket.at(locationIndex).value;
      entry.value = value;
    }

    const threshold = this.#capacity * this.#loadFactor;
    if (this.length() > threshold) {
      const entries = this.entries(); // save entries before clearing and expanding the array

      this.#capacity *= 2;
      this.#arr = Array.from({ length: this.#capacity }, () => new LinkedList());

      entries.forEach(([key, value]) => {
        this.set(key, value);
      });
    }
  }

  get(key) {
    const hashCode = this.#hash(key);
    this.#handleBoundsError(hashCode);
    const bucket = this.#arr[hashCode];

    const locationIdx = bucket.find(key, "key");
    if (locationIdx === null) {
      return null;
    }
    else {
      const entry = bucket.at(locationIdx).value;
      return entry.value;
    }
  }

  has(key) {
    const hashCode = this.#hash(key);
    this.#handleBoundsError(hashCode);
    const bucket = this.#arr[hashCode];

    return bucket.contains(key, "key");
  }

  // @question: is a potential optimization to resize upon dropping below a threshold? specifically, the previous one prior to expansion? which is the current (capacity / 2)*loadFactor
  remove(key) {
    const hashCode = this.#hash(key);
    this.#handleBoundsError(hashCode);
    const bucket = this.#arr[hashCode];

    const locationIdx = bucket.find(key, "key");
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
    this.#capacity = HashMap.BASE_CAPACITY;
    this.#arr = Array.from({ length: this.#capacity }, () => new LinkedList());  }

  keys() {
    return this.#arr
      .map((bucket) => bucket.toArray())
      .flat()
      .map((entry) => entry.key);
  }

  values() {
    return this.#arr
      .map((bucket) => bucket.toArray())
      .flat()
      .map((entry) => entry.value);
  }

  entries() {
    return this.#arr
      .map((bucket) => bucket.toArray())
      .flat()
      .map((entry) => [entry.key, entry.value]);
  }

  toString() {
    let str = ""
    for (let i = 0; i < this.#capacity; i++) {
      str += `index ${i}: ${this.#arr[i].toString()}\n`;
    } // using .reduce doesn't register the new lines, oddly
    return str;
  }

  #hash(key) {
    let hashCode = 0;

    const primeNumber = 31; 
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
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
  }
}

class Pair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

export {
  HashMap,
};