function partialUpdate(obj, updates) {
    return Object.assign(Object.assign({}, obj), updates);
}
console.log(partialUpdate({ name: 'Alice', age: 30, job: 'Developer' }, { age: 31 }));
// Output: { name: 'Alice', age: 31, job: 'Developer' }
console.log(partialUpdate({ name: 'Alice', age: 30, job: 'Developer' }, { name: 'Bob', job: 'Designer' }));
// Output: { name: 'Bob', age: 30, job: 'Designer' }
