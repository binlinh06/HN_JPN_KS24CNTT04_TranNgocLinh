/*
    1. Number
    2. String
    3. Boolean
    4. Null
    5. Undefined
    6. Union : 1 biến có nhiều kiểu dữ liệu
    7. Alias
    8. Intersection : Kiểu kết hợp &
    9. Type Guard (bảo vệ ) đối kiểu union
    typeof(a)==="string" chính là type Guard
    NESTJS
    10.any
    11.interface
 */
let a;
let new_person = {
    name: "",
    address: "",
    phone: "",
    email: "",
};
let a1 = 5;
console.log("a1", typeof (a1));
// number || string
function calculator(a) {
    if (typeof (a) === "string") {
        // xử lý kiểu chuỗi
    }
    else {
        // xử lý theo kiểu số
    }
}
let variable = 5;
variable = "abc";
let product = {
    price: 5000,
    name: "iphone5",
    image: "",
};
