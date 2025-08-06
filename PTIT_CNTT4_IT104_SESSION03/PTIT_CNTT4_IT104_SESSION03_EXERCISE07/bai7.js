var input = "banana";
var output = "";
for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
    var char = input_1[_i];
    if (!output.includes(char)) {
        output += char;
    }
}
console.log(output);
var input2 = "hello world";
var output2 = "";
for (var _a = 0, input2_1 = input2; _a < input2_1.length; _a++) {
    var char = input2_1[_a];
    if (!output2.includes(char)) {
        output2 += char;
    }
}
console.log(output2);
