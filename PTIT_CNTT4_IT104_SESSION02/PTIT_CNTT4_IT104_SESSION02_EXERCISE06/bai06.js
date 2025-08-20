function checkEndString(long,short){
    return long.endsWith(short)
}

console.log(checkEndString("Hello, World!", "Hello"))
console.log(checkEndString("Hi there!", "there!"))
