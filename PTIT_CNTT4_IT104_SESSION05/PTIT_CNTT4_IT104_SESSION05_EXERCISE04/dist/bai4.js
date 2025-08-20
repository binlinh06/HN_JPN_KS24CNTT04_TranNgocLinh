class Vehicle {
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    printInfo() {
        return `Tên: ${this.name}, Năm: ${this.year}, Hãng: ${this.company}, ID: ${this.id}`;
    }
}
const car = new Vehicle("Toyota Camry", 2020, "Toyota Motor Corporation", 1001);
console.log(car.printInfo());
