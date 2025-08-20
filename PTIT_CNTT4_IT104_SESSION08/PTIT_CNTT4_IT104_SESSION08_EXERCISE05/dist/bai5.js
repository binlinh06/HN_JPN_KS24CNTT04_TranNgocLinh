function findFirstEven(arr) {
    return arr.find(item => item % 2 === 0);
}
// Test
console.log(findFirstEven([1, 3, 5, 6, 7])); // Output: 6
console.log(findFirstEven([1, 3, 5])); // Output: undefined
