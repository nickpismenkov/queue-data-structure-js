class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.n = 0;
  }

  isEmpty() {
    return this.n === 0;
  }

  sizeOf() {
    return this.n;
  }

  enqueue(value) {
    let oldLast = this.last;

    this.last = new QueueNode(value);
    if (this.isEmpty()) {
      this.first = this.last;
    } else {
      oldLast.next = this.last;
    }

    this.n++;
  }

  dequeue() {
    if (!this.isEmpty()) {
      this.first = this.first.next;
      this.n--;
    }
  }
}

const queue = new Queue();
queue.enqueue('String1');
queue.enqueue('String2');
queue.enqueue('String3');
queue.enqueue('String4');
queue.enqueue('String5');
queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue);
