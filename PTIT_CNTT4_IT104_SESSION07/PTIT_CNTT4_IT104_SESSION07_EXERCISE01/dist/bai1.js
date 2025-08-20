class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Tên: ${this.name}`);
        console.log(`Công ty: ${this.company}`);
        console.log(`Số điện thoại: ${this.phone}`);
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        super.printInfo();
        console.log(`Số lượng thành viên trong nhóm: ${this.teamSize}`);
    }
}
const emp = new Employee("Nguyễn Văn A", "ABC Corp", "0123456789");
console.log("Thông tin nhân viên:");
emp.printInfo();
const manager = new Manager("Trần Thị B", "XYZ Ltd", "0987654321", 8);
console.log("\nThông tin quản lý:");
manager.printInfo();
