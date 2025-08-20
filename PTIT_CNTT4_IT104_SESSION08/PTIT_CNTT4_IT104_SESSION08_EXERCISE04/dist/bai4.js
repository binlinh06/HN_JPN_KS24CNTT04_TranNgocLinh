function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
// Test
const person = { name: "Alice", age: 25 };
const job = { title: "Developer", salary: 3000 };
const merged = mergeObjects(person, job);
console.log(merged);
// Output: { name: 'Alice', age: 25, title: 'Developer', salary: 3000 }
