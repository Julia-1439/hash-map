import { HashMap } from "./hashMap.js";
import { LinkedList } from "./linkedList.js";

const H = new HashMap();

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