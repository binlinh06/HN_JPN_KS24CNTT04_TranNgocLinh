// Hàm chuyển đổi giá trị về kiểu number nếu có thể
function toNumber(value) {
    var num = typeof value === 'string' ? Number(value) : value;
    return isNaN(num) ? null : num;
}
// Hàm cộng
function add(a, b) {
    var numA = toNumber(a);
    var numB = toNumber(b);
    if (numA === null || numB === null) {
        return "Giá trị không hợp lệ";
    }
    return numA + numB;
}
// Hàm trừ
function subtract(a, b) {
    var numA = toNumber(a);
    var numB = toNumber(b);
    if (numA === null || numB === null) {
        return "Giá trị không hợp lệ";
    }
    return numA - numB;
}
// Hàm nhân
function multiply(a, b) {
    var numA = toNumber(a);
    var numB = toNumber(b);
    if (numA === null || numB === null) {
        return "Giá trị không hợp lệ";
    }
    return numA * numB;
}
// Hàm chia
function divide(a, b) {
    var numA = toNumber(a);
    var numB = toNumber(b);
    if (numA === null || numB === null) {
        return "Giá trị không hợp lệ";
    }
    if (numB === 0) {
        return "Không thể chia cho 0";
    }
    return numA / numB;
}
console.log(add("10", 5)); 
console.log(subtract("20", "3")); 
console.log(multiply(4, "2")); 
console.log(divide("30", 5));
console.log(add("abc", 1)); 
console.log(divide(10, "0")); 
