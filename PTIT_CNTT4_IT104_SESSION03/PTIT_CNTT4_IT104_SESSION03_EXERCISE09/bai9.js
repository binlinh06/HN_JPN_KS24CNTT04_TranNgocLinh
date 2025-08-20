function toNumber(value) {
    var num = Number(value);
    return isNaN(num) ? null : num;
}
// Hàm cơ bản
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0)
        return "Không thể chia cho 0";
    return a / b;
}
// Hàm nâng cao
function power(base, exponent) {
    return Math.pow(base, exponent);
}
function sqrt(base, root) {
    return Math.pow(base, 1 / root);
}
function factorial(n) {
    if (n < 0 || !Number.isInteger(n))
        return "Giai thừa chỉ áp dụng cho số nguyên không âm";
    var result = 1;
    for (var i = 2; i <= n; i++)
        result *= i;
    return result;
}
// Hàm xử lý khi nhấn nút
function handleOperation(op) {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var num1 = toNumber(input1);
    var num2 = toNumber(input2);
    var result = "";
    switch (op) {
        case "+":
            if (num1 === null || num2 === null)
                result = "Giá trị không hợp lệ";
            else
                result = add(num1, num2);
            break;
        case "-":
            if (num1 === null || num2 === null)
                result = "Giá trị không hợp lệ";
            else
                result = subtract(num1, num2);
            break;
        case "*":
            if (num1 === null || num2 === null)
                result = "Giá trị không hợp lệ";
            else
                result = multiply(num1, num2);
            break;
        case "/":
            if (num1 === null || num2 === null)
                result = "Giá trị không hợp lệ";
            else
                result = divide(num1, num2);
            break;
        case "^":
            if (num1 === null || num2 === null)
                result = "Giá trị không hợp lệ";
            else
                result = power(num1, num2);
            break;
        case "√":
            if (num1 === null || num2 === null)
                result = "Giá trị không hợp lệ";
            else
                result = sqrt(num1, num2);
            break;
        case "!":
            if (num1 === null)
                result = "Giá trị không hợp lệ";
            else
                result = factorial(num1);
            break;
        default:
            result = "Phép toán không hợp lệ";
    }
    document.getElementById("result").innerText =
        "Kết quả: " + result;
}
