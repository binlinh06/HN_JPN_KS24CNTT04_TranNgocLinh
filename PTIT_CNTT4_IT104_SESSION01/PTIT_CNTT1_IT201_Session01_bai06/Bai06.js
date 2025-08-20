function User(name, age = 18, user = "user"){
    return {
        name: name,
        age: age,
        user: user
    }
}
console.log(User("Linh"));

console.log(User("Linhh",12,"HeHe"));    