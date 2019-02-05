# binary heap

a small binary heap class with helpful methods

see `example.js` for examples

- min or max heap
  ```javascript
  const maxHeap = new BinaryHeap() // or { min: false }
  const minHeap = new BinaryHeap({ min: true })
  ```
- insert a single key/val pair, where key defines place on heap
  ```javascript
  heap.insert(3, 'b')
  heap.insert(1, 'a')
  heap.size // 2
  ```
- insert an array of values; it will auto `insert(a[i], i)`
  ```javascript
  heap.insert([5, 4, 3, 1, 2, 6])
  /* same as
  heap.insert(5, 0)
  heap.insert(4, 1)
  heap.insert(3, 2)
  heap.insert(1, 3)
  heap.insert(2, 4)
  heap.insert(6, 5)
  */
  ```
- custom compare function
  ```javascript
  const heap = new BinaryHeap({
    // should return a negative number if a should be higher
    // in the heap than b; a positive number if a should be lower
    // in the heap than b; 0 if they are logically equivalent
    compare: (a, b) => a.specialProp[5] - b.specialProp[5]
  })
  ```
- peek / extract / iterate+extract
  ```javascript
  heap.peek() // show top of heap without extracting it
  heap.extract() // remove + return top of heap
  for (let node of heap.getTop()) { // iterate and extract
    console.log(node) // { key, val }
  }
  ```
- includes a sort function which takes in an array of values and heapsorts
  ```javascript
  const arr = [1, 5, 3, 2, 4]
  // options are passed to heap constructor
  sort(arr, { inplace: true, min: true })
  console.log(arr) // 1, 2, 3, 4, 5
  ```

## License 
MIT