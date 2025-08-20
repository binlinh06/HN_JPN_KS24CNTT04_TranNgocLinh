function findElement(arr, value) {
    return arr.find(item => item === value);
}
// Test với số
console.log(findElement([1, 2, 3, 4], 3)); // Output: 3
console.log(findElement([1, 2, 3, 4], 5)); // Output: undefined
// Test với chuỗi
console.log(findElement(["apple", "banana", "cherry"], "banana")); // Output: "banana"
console.log(findElement(["apple", "banana", "cherry"], "grape")); // Output: undefined
