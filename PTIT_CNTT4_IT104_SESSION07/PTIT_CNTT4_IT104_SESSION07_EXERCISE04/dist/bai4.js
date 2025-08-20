class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Tên: ${this.name}`);
    }
}
class Students extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`ID: ${this.id}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Môn: ${this.subject}`);
    }
}
const student = new Students("Nguyễn Văn A", 1);
const teacher = new Teacher("Trần Thị B", "Toán học");
student.displayInfo();
teacher.displayInfo();
