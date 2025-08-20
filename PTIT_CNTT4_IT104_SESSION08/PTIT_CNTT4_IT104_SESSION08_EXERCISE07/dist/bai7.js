function flatten(arr) {
    return arr.reduce((flat, current) => [...flat, ...current], []);
}
console.log(flatten([[1, 2], [3, 4], [5, 6]]));
// Output: [1, 2, 3, 4, 5, 6]
console.log(flatten([['apple', 'banana'], ['cherry'], ['date', 'elderberry']]));
// Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']
