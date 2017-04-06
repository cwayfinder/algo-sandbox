class Queue {
  constructor() {
    this._storage = {};
    this._head = 0;
    this._tail = 0;
  }

  enqueue(item) {
    this._storage[this._tail++] = item;
  }

  dequeue() {
    const value = this._storage[this._head];
    delete this._storage[this._head];
    if (this._head < this._tail) this._head++;
    return value;
  }

  peek() {
    return this._storage[this._head];
  }

  size() {
    return this._tail - this._head;
  }
}


const queue = new Queue();
queue.enqueue('first');
queue.enqueue('second')
queue.enqueue('third');
queue.enqueue('fourth');

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
