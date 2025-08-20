function sum(numbers) {
    let sum = 0;
    for (const i of numbers) {
        if (numbers[i] % 2 == 0) {
            sum += numbers[i]
        }
    }
    console.log(sum);

}
sum([1, 2, 3, 4, 5, 6]);