function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

// Test
const person = { name: "Alice", age: 25 };
const job = { title: "Developer", salary: 3000 };

const merged = mergeObjects(person, job);
console.log(merged);
// Output: { name: 'Alice', age: 25, title: 'Developer', salary: 3000 }
