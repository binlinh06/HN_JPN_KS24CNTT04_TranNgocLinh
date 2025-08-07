const num = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
let sum = 0;
for (let i = 0; i < num.length; i++) {
    sum += num[i];
}
let total = (sum / num.length).toFixed(2);
console.log(total);
