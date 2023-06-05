function firstUniqChar(s) {
    const charCount = new Map();

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (charCount.get(s[i]) === 1) {
            return i;
        }
    }

    return -1; // No unique character found
}

// Test case 1
let s1 = "leetcode";
console.log(firstUniqChar(s1)); // Output: 0

// Test case 2
let s2 = "loveleetcode";
console.log(firstUniqChar(s2)); // Output: 2

// Test case 3
let s3 = "aabb";
console.log(firstUniqChar(s3)); // Output: -1
