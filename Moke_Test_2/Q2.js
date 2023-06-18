class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function addTwoNumbers(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;
  
    while (l1 !== null || l2 !== null) {
      const x = l1 !== null ? l1.val : 0;
      const y = l2 !== null ? l2.val : 0;
      const sum = x + y + carry;
  
      carry = Math.floor(sum / 10);
      current.next = new ListNode(sum % 10);
  
      current = current.next;
      if (l1 !== null) l1 = l1.next;
      if (l2 !== null) l2 = l2.next;
    }
  
    if (carry > 0) {
      current.next = new ListNode(carry);
    }
  
    return dummy.next;
  }
  

//   You can use this function to add two numbers represented as linked lists. Here are a few examples:

// Example 1
const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

console.log(addTwoNumbers(l1, l2)); // Output: [7, 0, 8]

// Example 2
const l3 = new ListNode(0);
const l4 = new ListNode(0);

console.log(addTwoNumbers(l3, l4)); // Output: [0]

// Example 3
const l5 = new ListNode(9);
l5.next = new ListNode(9);
l5.next.next = new ListNode(9);
l5.next.next.next = new ListNode(9);
l5.next.next.next.next = new ListNode(9);
l5.next.next.next.next.next = new ListNode(9);
l5.next.next.next.next.next.next = new ListNode(9);

const l6 = new ListNode(9);
l6.next = new ListNode(9);
l6.next.next = new ListNode(9);
l6.next.next.next = new ListNode(9);

console.log(addTwoNumbers(l5, l6)); // Output: [8, 9, 9, 9, 0, 0, 

// The time complexity is O(max(n, m)), and the space complexity is also O(max(n, m)), where n and m are the lengths of the input linked lists.