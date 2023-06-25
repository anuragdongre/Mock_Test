class Queue {
    constructor() {
      this.items = [];
    }
  
    // Adds an element to the rear of the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Removes and returns the frontmost element of the queue
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.shift();
    }
  
    // Returns true if the queue is empty, false otherwise
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Returns the frontmost element of the queue without removing it
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[0];
    }
  
    // Returns the number of elements in the queue
    size() {
      return this.items.length;
    }
  
    // Removes all elements from the queue
    clear() {
      this.items = [];
    }
  }
  
  // Example usage:
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  console.log(queue.peek()); // Output: 10
  console.log(queue.dequeue()); // Output: 10
  console.log(queue.size()); // Output: 2
  console.log(queue.isEmpty()); // Output: false
  queue.clear();
  console.log(queue.isEmpty()); // Output: true
  