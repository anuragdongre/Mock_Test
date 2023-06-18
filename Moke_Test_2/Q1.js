function sqrt(x) {
    if (x <= 1) {
      return x;
    }
  
    let left = 0;
    let right = Math.floor(x / 2);
    let result = 0;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const square = mid * mid;
  
      if (square === x) {
        return mid;
      } else if (square < x) {
        result = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return result;
  }
  

//   To use this function and test the provided examples, you can do the following:

console.log(sqrt(4)); // Output: 2
console.log(sqrt(8)); // Output: 2

// Time complexity: The time complexity of this solution is O(log x) because it uses a binary search approach to find the square root.

// Space complexity: The space complexity is O(1) as it only uses a few variables for computation.