function moveZeroes(nums) {
    let nonZeroIndex = 0;
    
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }
    
    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
    
    return nums;
}

// Test case 1
let nums1 = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums1)); // Output: [1, 3, 12, 0, 0]

// Test case 2
let nums2 = [0];
console.log(moveZeroes(nums2)); // Output: [0]
