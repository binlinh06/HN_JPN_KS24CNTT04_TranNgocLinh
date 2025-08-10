class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        return `Ten:${this.name},Cong ty:${this.company},DT:${this.phone}`;
    }
}
const User = new Employee("Linh", "hihi", 2026);
console.log(User.printInfo());
