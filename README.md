# hash-map

An implementation of a Hash Map storing string-value pairs, and a Hash Set storing strings. These feature the expected CRUD operations, a hash function to hash strings, and dynamic enlarging to minimize collisions. 

<strong>Reflection</strong>

A hash map/set offers a remarkable O(1) average-case runtime for insertion, retrieval, and deletion. It does this by generating an array index - a hash code - in constant time on the input, and using that index to access in constant time the location at which that input is stored or will be stored. 

Not all indices will be unique due to the finite array size, resulting in collisions. Collisions are resolved by using a linked list at each array slot to store collided elements. This results in a worst-case runtime of O(n) for insertion, retrieval, and deletion. 

Dynamic enlarging is utilized to minimize collisions. The threshold at which the internal array is enlarged is chosen such that it's not too low to avoid wasting memory, and not too high to reduce the frequency of collisions. 