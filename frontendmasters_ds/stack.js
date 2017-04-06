class Stack {
  constructor() {
    this._storage = {};
    this._count = 0;
  }

  push(item) {
    this._storage[this._count++] = item;
  }

  pop() {
    const value = this._storage[--this._count];
    delete this._storage[this._count];
    return value;
  }

  size() {
    return this._count;
  }
}


const stack = new Stack();
stack.push('first');
stack.push('second');
stack.push('third');
stack.push('fourth');

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
