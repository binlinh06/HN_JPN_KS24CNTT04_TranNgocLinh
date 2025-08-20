class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
}
let allStudents = [];
class Classroom {
    constructor() {
        this.students = [];
    }
    showStudents() {
        if (this.students.length === 0) {
            console.log("Lớp chưa có học sinh.");
        }
        else {
            this.students.forEach(student => {
                console.log(`ID: ${student.getId()}, Tên: ${student.getName()}`);
            });
        }
    }
    addStudentInClass(id) {
        const index = allStudents.findIndex(student => student.getId() === id);
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        }
        else {
            console.log(`Không tìm thấy học sinh với ID ${id} trong danh sách tất cả học sinh.`);
        }
    }
    removeStudent(id) {
        const index = this.students.findIndex(student => student.getId() === id);
        if (index !== -1) {
            allStudents.push(this.students[index]);
            this.students.splice(index, 1);
        }
        else {
            console.log(`Không tìm thấy học sinh với ID ${id} trong lớp.`);
        }
    }
    editStudent(id, newName) {
        const student = this.students.find(student => student.getId() === id);
        if (student) {
            student.setName(newName);
        }
        else {
            console.log(`Không tìm thấy học sinh với ID ${id} để sửa.`);
        }
    }
}
allStudents.push(new Student(1, "An"), new Student(2, "Bình"), new Student(3, "Chi"), new Student(4, "Dũng"), new Student(5, "Hạnh"), new Student(6, "Khánh"));
const classA = new Classroom();
const classB = new Classroom();
classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);
classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);
console.log("Lớp A ban đầu:");
classA.showStudents();
classA.removeStudent(2);
console.log("Lớp A sau khi xóa học sinh ID 2:");
classA.showStudents();
console.log("Danh sách tất cả học sinh sau khi trả học sinh về:");
console.log(allStudents.map(s => `ID: ${s.getId()}, Tên: ${s.getName()}`));
classA.editStudent(3, "Chiến");
console.log("Lớp A sau khi sửa tên học sinh ID 3:");
classA.showStudents();
