const TYPES = { MIN: 0, MAX: 1 }

class BinaryHeap {
  constructor (config = {}) {
    this.compare = typeof config.compare === 'function'
      ? config.compare
      : this._defaultCompare
    this.type = config.min ? TYPES.MIN : TYPES.MAX
    this.data = []
  }
  get size () {
    return this.data.length
  }
  peek () {
    return this.size ? this.data[0] : null
  }
  insert (key, val) {
    if (Array.isArray(key)) {
      key.forEach((k, v) => this.insert(k, v))
      return
    }
    const node = { key, val }
    this.data.push(node)
    this._bubbleUp()
  }
  extract () {
    if (this.size === 1) {
      return this.data.pop()
    }
    const node = this.data[0] || null
    this.data[0] = this.data.pop()
    this._bubbleDown()
    return node
  }
  *getTop () {
    let node = this.extract()
    while (node !== null) {
      yield node
      node = this.extract()
    }
  }
  _bubbleDown (idx = 0) {
    let left = (2 * idx) + 1
    let right = (2 * idx) + 2
    let highest = idx
    if (left < this.size) {
      if (this.compare(this.data[highest].key, this.data[left].key) > 0) {
        highest = left
      }
    }
    if (right < this.size) {
      if (this.compare(this.data[highest].key, this.data[right].key) > 0) {
        highest = right
      }
    }
    if (highest !== idx) {
      let tmp = this.data[idx]
      this.data[idx] = this.data[highest]
      this.data[highest] = tmp
      this._bubbleDown(highest)
    }
  }
  _bubbleUp () {
    let currentIdx = this.data.length - 1
    let parentIdx = Math.floor((currentIdx - 1) / 2)
    if (parentIdx < 0 || parentIdx === currentIdx) return
    let cmp = this.compare(this.data[parentIdx].key, this.data[currentIdx].key)
    while (parentIdx >= 0 && cmp > 0) {
      let tmp = this.data[parentIdx]
      this.data[parentIdx] = this.data[currentIdx]
      this.data[currentIdx] = tmp
      currentIdx = parentIdx
      parentIdx = Math.floor((currentIdx - 1) / 2)
      if (parentIdx < 0) break
      cmp = this.compare(this.data[parentIdx].key, this.data[currentIdx].key)
    }
  }
  _defaultCompare (a, b) {
    return this.type === TYPES.MIN ? a - b : b - a
  }
}

module.exports = BinaryHeap
