const BinaryHeap = require('./BinaryHeap')

function sort (values = [], opts = {}) {
  const output = opts.inplace ? values : []
  const heap = new BinaryHeap(opts)
  heap.insert(values)
  for (let i = 0; i < values.length; i++) {
    output[i] = heap.extract().key
  }
  return output
}

module.exports = sort
