const a = 5;
const arr = [1,2,3];

a = 10;
console.log(a);//sai vì const không được gán lại tham chiếu
arr.push(4);
console.log(arr);//Đc vì là mảng tham chiếu