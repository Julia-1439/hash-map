import { HashSet } from "./hashSet.js";

const H = new HashSet();

// using the given test procedure
H.set('apple');
H.set('banana');
H.set('carrot');
H.set('dog');
H.set('elephant');
H.set('frog');
H.set('grape');
H.set('hat');
H.set('ice cream');
H.set('jacket');
H.set('kite');
H.set('lion');

console.log(H.toString()); // at capacity

H.set('lion');
console.log(H.toString(), H.length(), H.capacity); 

H.set('moon');
console.log(H.toString(), H.length(), H.capacity); // over capacity

H.set('_apple');
H.set('_banana');
H.set('_carrot');
H.set('_dog');
H.set('_elephant');
H.set('_frog');
H.set('_grape');
H.set('_hat');
H.set('_ice cream');
H.set('_jacket');
H.set('_kite');

console.log(H.toString(), H.length(), H.capacity); // at capacity

H.set('_jacket');
console.log(H.toString(), H.length(), H.capacity);

// H.set('_wow');
// console.log(H.toString(), H.length(), H.capacity); // over capacity

// H.clear();
// console.log(H.toString(), H.length(), H.capacity);

console.log("Has:", H.has("grape"));
console.log("Has:", H.has("mo"));
console.log("Has:", H.has("_jacket"));
console.log("Has:", H.has("mo"));
console.log("Remove:", H.remove("lion"));
console.log("Remove:", H.remove("mo"));

console.log(H.toString(), H.length());

console.log(H.values());

H.clear()
console.log(H.length(), H.capacity);