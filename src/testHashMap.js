import { HashMap } from "./hashMap.js";
import { LinkedList } from "./linkedList.js";

const L = new LinkedList();
L.append({
  key: "a",
  value: 6,
});
L.append({
  key: "b",
  value: 7,
});

console.log(L.contains("b"));
console.log(L.contains("b", "key"));
console.log(L.contains("c", "key"));


const H = new HashMap();
H.set("carlos", "I am the old value");
H.set("carlos", "I am the new value");
console.log(H.toString());

console.log(H.entries());

H.set("be", "happy");
H.set('apple', 'red');
H.set('banana', 'yellow');
H.set('carrot', 'orange');
H.set('dog', 'brown');
H.set('elephant', 'gray');
H.set('frog', 'green');
H.set('grape', 'purple');
H.set('hat', 'black');
H.set('ice cream', 'white');
H.set('jacket', 'blue');
H.set('kite', 'pink');
H.set('lion', 'golden');
console.log(H.toString());

console.log("Finding 'roo'", H.get("roo"));
console.log("Finding 'carlos'", H.get("carlos"));

console.log("Has 'lion' (nested in list):", H.has("lion"));
console.log("Has 'asdf':", H.has("asdf"));
console.log("Has 'banana' (first in list):", H.has("banana"));


console.log("Removed 'banana' (first in list):", H.remove("banana"));
console.log("Attempt removal of 'asdf':", H.remove("asdf"));
console.log("Removed 'dog' (middle of list):", H.remove("dog"));

console.log(H.toString());

console.log(H.length());

console.log("Keys:", H.keys());
console.log("Values:", H.values());
console.log("Entries:", H.entries());

H.clear()
console.log("Cleared:", H.toString());

console.log("Keys:", H.keys());
console.log("Values:", H.values());
console.log("Entries:", H.entries());

H.clear();
console.log("Cleared:", H.toString());

// using the given test procedure
H.set('apple', 'red');
H.set('banana', 'yellow');
H.set('carrot', 'orange');
H.set('dog', 'brown');
H.set('elephant', 'gray');
H.set('frog', 'green');
H.set('grape', 'purple');
H.set('hat', 'black');
H.set('ice cream', 'white');
H.set('jacket', 'blue');
H.set('kite', 'pink');
H.set('lion', 'golden');

console.log(H.toString()); // at capacity

H.set('lion', 'black');
console.log(H.toString(), H.length(), H.capacity); 

H.set('moon', 'silver');
console.log(H.toString(), H.length(), H.capacity); // over capacity

H.set('_apple', 'red');
H.set('_banana', 'yellow');
H.set('_carrot', 'orange');
H.set('_dog', 'brown');
H.set('_elephant', 'gray');
H.set('_frog', 'green');
H.set('_grape', 'purple');
H.set('_hat', 'black');
H.set('_ice cream', 'white');
H.set('_jacket', 'blue');
H.set('_kite', 'pink');

console.log(H.toString(), H.length(), H.capacity); // at capacity

H.set('_jacket', 'GREEN');
console.log(H.toString(), H.length(), H.capacity);

// H.set('_wow', 'black');
// console.log(H.toString(), H.length(), H.capacity); // over capacity

// H.clear();
// console.log(H.toString(), H.length(), H.capacity);

console.log("Get:", H.get("grape"));
console.log("Get:", H.get("mo"));
console.log("Has:", H.has("_jacket"));
console.log("Has:", H.has("mo"));
console.log("Remove:", H.remove("lion"));
console.log("Remove:", H.remove("mo"));

console.log(H.toString(), H.length());

console.log(H.keys());
console.log(H.values());
console.log(H.entries());

H.clear()
console.log(H.length(), H.capacity);