class Student {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }
}

let allStudents: Student[] = [];

class Classroom {
    private students: Student[] = [];

    showStudents(): void {
        if (this.students.length === 0) {
            console.log("Lớp chưa có học sinh.");
        } else {
            this.students.forEach(student => {
                console.log(`ID: ${student.getId()}, Tên: ${student.getName()}`);
            });
        }
    }

    addStudent(student: Student): void {
        this.students.push(student);
    }

    filterStudent(id: number): Student[] {
        return this.students.filter(student => student.getId() === id);
    }

    addStudentInClass(id: number): void {
        const index = allStudents.findIndex(student => student.getId() === id);
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        } else {
            console.log(`Không tìm thấy học sinh với ID ${id} trong danh sách tất cả học sinh.`);
        }
    }
}

allStudents.push(
    new Student(1, "An"),
    new Student(2, "Bình"),
    new Student(3, "Chi"),
    new Student(4, "Dũng"),
    new Student(5, "Hạnh"),
    new Student(6, "Khánh")
);

const classA = new Classroom();
const classB = new Classroom();

classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);

classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);

console.log("Danh sách học sinh lớp A:");
classA.showStudents();

console.log("Danh sách học sinh lớp B:");
classB.showStudents();

console.log("Danh sách học sinh còn lại:");
console.log(allStudents);
