const BinaryHeap = require('.')

/**
 * examples of using a binary heap
 */

// max heap
const maxheap = new BinaryHeap()
maxheap.insert(5)
maxheap.insert(1)
maxheap.insert(4)
maxheap.insert(2)
maxheap.insert(3)
maxheap.insert(6)
console.log('maxheap; extracting top two')
console.log(maxheap.extract()) // 6
console.log(maxheap.extract()) // 5

// min heap
const minheap = new BinaryHeap({ min: true })
minheap.insert(5)
minheap.insert(1)
minheap.insert(4)
minheap.insert(2)
minheap.insert(3)
minheap.insert(6)
console.log('minheap; extracting top two')
console.log(minheap.extract()) // 1
console.log(minheap.extract()) // 2

// inserting an array
const heap = new BinaryHeap({ min: true })
heap.insert([1, 5, 4, 3, 2])
console.log('heapified array; extracting top two')
console.log(heap.extract()) // 1
console.log(heap.extract()) // 2

// custom compare function
const compare = (a, b) => a.age - b.age // min age
const ageHeap = new BinaryHeap({ compare })
ageHeap.insert({ age: 25, name: 'pete' })
ageHeap.insert({ age: 24, name: 'mary' })
ageHeap.insert({ age: 27, name: 'chris' })
console.log('custom compare function; extracting top two')
console.log(ageHeap.extract()) // mary
console.log(ageHeap.extract()) // pete

// iterate + extract
const heap2 = new BinaryHeap({ min: true })
heap2.insert([1, 5, 4, 3, 2])
for (let node of heap2.getTop()) {
  console.log(node) // 1, 2, 3, 4, 5
}
