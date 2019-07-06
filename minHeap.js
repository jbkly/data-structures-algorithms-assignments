export default class minHeap {
  constructor(unsortedArray = []) {
    this.heap = unsortedArray;
    this.minHeapify();
  }
  peek() {
    // return (but don't remove) the top (min) item
    return this.heap.length ? this.heap[0] : null;
  }
  insert(item) {
    this.heap.push(item);
    this.heapifyUp(this.heap.length - 1);
    return this;
  }
  insertMultiple(unsortedArray) {
    this.heap.push(...unsortedArray);
    this.minHeapify();
    return this;
  }
  size() {
    return this.heap.length;
  }
  pop() {
    // remove and return the top (min) item
    if (!this.size()) return null;
    if (this.size() === 1) return this.heap.pop();
    const topItem = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return topItem;
  }
  last() {
    if (!this.heap.length) return null;
    return this.heap[this.heap.length - 1];
  }
  swap(i1, i2) {
    // swap two nodes
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }
  heapifyUp(startIndex) {
    // (heapify up:) while item is smaller value than parent, swap with parent
    let i = startIndex || this.heap.length - 1;
    const node = this.heap[i];
    while (this.hasParent(i) && node.val < this.parent(i).val) {
      let parentIndex = this.getParentIndex(i);
      this.swap(i, parentIndex);
      i = parentIndex;
    }
  }
  heapifyDown(startIndex = 0) {
    // while item is higher value than either child, swap it with smallest child
    let i = startIndex;
    const node = this.heap[i];

    while (
      (this.hasLeftChild(i) && node.val > this.leftChild(i).val) ||
      (this.hasRightChild(i) && node.val > this.rightChild(i).val)
    ) {
      let childIndex = this.getMinChildIndex(i);
      this.swap(i, childIndex);
      i = childIndex;
    }
  }
  minHeapify() {
    const startIndex = Math.floor((this.heap.length - 1)/2);
    for (let i = startIndex; i >= 0; i--) {
      this.heapifyDown(i);
    }
  }
  getMinChildIndex(i) {
    let leftChildVal = !this.hasLeftChild(i) ? Infinity : this.leftChild(i).val;
    let rightChildVal = !this.hasRightChild(i) ? Infinity : this.rightChild(i).val;
    return leftChildVal > rightChildVal ?
      this.getRightChildIndex(i) : this.getLeftChildIndex(i);
  }
  getLeftChildIndex(i) {
    return 2 * i + 1;
  }
  getRightChildIndex(i) {
    return 2 * i + 2;
  }
  hasLeftChild(i) {
    return this.getLeftChildIndex(i) < this.heap.length;
  }
  hasRightChild(i) {
    return this.getRightChildIndex(i) < this.heap.length;
  }
  leftChild(i) {
    return this.heap[this.getLeftChildIndex(i)];
  }
  rightChild(i) {
    return this.heap[this.getRightChildIndex(i)];
  }
  getParentIndex(i) {
    return Math.floor((i - 1)/2)
  }
  hasParent(i) {
    return this.getParentIndex(i) >= 0;
  }
  parent(i) {
    return this.heap[this.getParentIndex(i)];
  }
}



// //testcases
const val = (item) => item !== null && typeof item.val === 'number' ? item.val : item;
const assert = (name, actual, expected) => {
  actual = val(actual);
  expected = val(expected);
  const passed = actual === expected;
  const output = `${name}: ` +
    (passed ? 'passed' : `FAILED - expected ${expected}, actual was ${actual}`);
  if (passed) console.log(output);
  else console.error(output);
}

// creating heap from unsorted array
let unsortedArray = [
  {val:5},{val:2},{val:7},{val:4},{val:0},{val:1}
];
let heap = new minHeap(unsortedArray);
window.heap = heap;
assert('size', heap.size(), unsortedArray.length);
assert('peek', heap.peek().val, 0);
// insert
heap.insert({val:-5});
assert('size after insert', heap.size(), 7);
assert('top after insert', heap.peek(), {val:-5});
// pop
let result = heap.pop();
assert('pop result', result, -5);
assert('size after pop', heap.size(), 6);
assert('top after pop', heap.peek(), 0);
// next pop
assert('next pop: ', heap.pop(), 0);
assert('next pop: ', heap.pop(), 1);
assert('next pop: ', heap.pop(), 2);
assert('next pop: ', heap.pop(), 4);
assert('next pop: ', heap.pop(), 5);
assert('next pop: ', heap.pop(), 7);
assert('empty heap: ', heap.size(), 0);
assert('null pop: ', heap.pop(), null);

// insert multiple to empty heap
heap = new minHeap();
heap.insertMultiple([{val:5},{val:2},{val:7}]);
assert('size after inserting multiple to empty heap', heap.size(), 3);
assert('pop: ', heap.pop(), 2);
heap.insert({val:12});
assert('insert 12 then pop: ', heap.pop(), 5);
heap.insert({val:-100});
assert('insert -100 then pop: ', heap.pop(), -100);
assert('next pop: ', heap.pop(), 7);
assert('next pop: ', heap.pop(), 12);
assert('empty heap: ', heap.size(), 0);
assert('null pop: ', heap.pop(), null);

//insert multiple to existing heap
heap = new minHeap([{val:3},{val:-3},{val:0}]);
heap.insertMultiple([{val:0},{val:-10},{val:-20}]);
assert('size after insert multiple to existing: ', heap.size(), 6);
assert('pop: ', heap.pop(), -20);
assert('pop: ', heap.pop(), -10);
assert('pop: ', heap.pop(), -3);
assert('pop: ', heap.pop(), 0);
assert('pop: ', heap.pop(), 0);
assert('pop: ', heap.pop(), 3);

