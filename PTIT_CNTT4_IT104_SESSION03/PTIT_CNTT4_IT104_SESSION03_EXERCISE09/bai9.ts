function toNumber(value: string): number | null {
  const num = Number(value);
  return isNaN(num) ? null : num;
}

// Hàm cơ bản
function add(a: number, b: number): number {
  return a + b;
}
function subtract(a: number, b: number): number {
  return a - b;
}
function multiply(a: number, b: number): number {
  return a * b;
}
function divide(a: number, b: number): number | string {
  if (b === 0) return "Không thể chia cho 0";
  return a / b;
}

// Hàm nâng cao
function power(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}
function sqrt(base: number, root: number): number {
  return Math.pow(base, 1 / root);
}
function factorial(n: number): number | string {
  if (n < 0 || !Number.isInteger(n))
    return "Giai thừa chỉ áp dụng cho số nguyên không âm";
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

// Hàm xử lý khi nhấn nút
function handleOperation(op: string): void {
  const input1 = (document.getElementById("input1") as HTMLInputElement).value;
  const input2 = (document.getElementById("input2") as HTMLInputElement).value;
  const num1 = toNumber(input1);
  const num2 = toNumber(input2);
  let result: number | string = "";

  switch (op) {
    case "+":
      if (num1 === null || num2 === null) result = "Giá trị không hợp lệ";
      else result = add(num1, num2);
      break;
    case "-":
      if (num1 === null || num2 === null) result = "Giá trị không hợp lệ";
      else result = subtract(num1, num2);
      break;
    case "*":
      if (num1 === null || num2 === null) result = "Giá trị không hợp lệ";
      else result = multiply(num1, num2);
      break;
    case "/":
      if (num1 === null || num2 === null) result = "Giá trị không hợp lệ";
      else result = divide(num1, num2);
      break;
    case "^":
      if (num1 === null || num2 === null) result = "Giá trị không hợp lệ";
      else result = power(num1, num2);
      break;
    case "√":
      if (num1 === null || num2 === null) result = "Giá trị không hợp lệ";
      else result = sqrt(num1, num2);
      break;
    case "!":
      if (num1 === null) result = "Giá trị không hợp lệ";
      else result = factorial(num1);
      break;
    default:
      result = "Phép toán không hợp lệ";
  }

  (document.getElementById("result") as HTMLElement).innerText =
    "Kết quả: " + result;
}
