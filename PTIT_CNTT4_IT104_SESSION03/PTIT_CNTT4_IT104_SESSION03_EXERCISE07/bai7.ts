let input:string = "banana"
let output:string = ""

for (let char of input) {
  if (!output.includes(char)) {
    output += char;
  }
}

console.log(output);
let input2:string = "hello world"
let output2:string = ""

for (let char of input2) {
  if (!output2.includes(char)) {
    output2 += char;
  }
}

console.log(output2);
