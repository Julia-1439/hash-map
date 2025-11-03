class LinkedList {
  #head;
  constructor() {
    this.#head = null;
  }

  append(value) {
    if (this.#head === null) {
      this.#head = new Node(value);
      return;
    }

    // traverse to the end
    let curr = this.#head;
    while (curr.nextNode) {
      curr = curr.nextNode;
    }

    // perform the insertion
    curr.nextNode = new Node(value);
  }

  prepend(value) {
    const newHead = new Node(value);
    newHead.nextNode = this.#head;
    this.#head = newHead;
  }

  size() {
    let size = 0;
    let curr = this.#head;
    while (curr) {
      size++;
      curr = curr.nextNode;
    }
    return size;
  }

  head() {
    return this.#head;
  }

  tail() {
    if (this.#head === null) {
      return null;
    }

    let curr = this.#head;
    while (curr && curr.nextNode) {
      curr = curr.nextNode;
    }
    return curr;
  }

  /**
   * 
   * @param {Integer} index any out-of-bound indices return `undefined`
   * @returns 
   */
  at(index) {
    if (index < 0)
      return undefined;

    let curr = this.#head;
    for (let i = 0; i < index; i++) {
      curr = curr?.nextNode; // the `.?` handles positive out of bound indices
    }
    return curr;
  }

  pop() {
    if (this.#head === null) { // empty 
      return undefined;
    }
    if (this.#head.nextNode === null) { // one element
      const popped = this.#head;
      this.#head = null;
      return popped;
    }

    let prev = this.#head;
    let curr = prev.nextNode;
    while (curr.nextNode) {
      prev = curr;
      curr = curr.nextNode;
    }

    prev.nextNode = null;
    return curr;
  }

  contains(searchValue) {
    if (this.#head === null) {
      return false;
    }

    let hasFound = false;
    let curr = this.#head;
    while (curr) {
      if (curr.value === searchValue) {
        hasFound = true;
        break;
      }
      curr = curr.nextNode;
    }

    return hasFound;
  }

  find(searchValue) {
    if (this.#head === null) {
      return null;
    }

    let locationIndex = null;
    let curr = this.#head;
    for (let i = 0; curr; i++) {
      if (curr.value === searchValue) {
        locationIndex = i;
        break;
      }
      curr = curr.nextNode;
    }

    return locationIndex;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size()) {
      throw new Error("Index is out of bounds.");
    }
    if (index === 0) {
      this.prepend(value);
      return; 
    }

    let curr = this.#head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.nextNode;
    }

    const newNode = new Node(value);
    newNode.nextNode = curr.nextNode;
    curr.nextNode = newNode;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      throw new Error("Index is out of bounds.");
    }
    if (index === 0) { // at least 1 element exists
      const removed = this.#head;
      this.#head = this.#head.nextNode;
      return removed; 
    }

    // at least 2 elements exist now
    let curr = this.#head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.nextNode;
    }

    curr.nextNode = curr.nextNode.nextNode;
  }

  toString() {
    let str = "";
    let curr = this.#head;
    while (curr) {
      str += `${curr.toString()} -> `;
      curr = curr.nextNode;
    }
    str += curr; // appends 'null'

    return str;
  }

}

class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }

  toString() {
    return `( ${this.value} )`;
  }
}

export {
  LinkedList,
};