class Stack {
    constructor() {
      this.items = [];
    }
  
    // Pushes an element to the top of the stack
    push(element) {
      this.items.push(element);
    }
  
    // Removes and returns the topmost element of the stack
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.pop();
    }
  
    // Returns true if the stack is empty, false otherwise
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Returns the topmost element of the stack without removing it
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[this.items.length - 1];
    }
  
    // Returns the number of elements in the stack
    size() {
      return this.items.length;
    }
  
    // Removes all elements from the stack
    clear() {
      this.items = [];
    }
  }
  
  // Example usage:
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  console.log(stack.peek()); // Output: 30
  console.log(stack.pop()); // Output: 30
  console.log(stack.size()); // Output: 2
  console.log(stack.isEmpty()); // Output: false
  stack.clear();
  console.log(stack.isEmpty()); // Output: true
  