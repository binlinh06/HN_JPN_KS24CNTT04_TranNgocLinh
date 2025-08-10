class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
const studentList = [];
studentList.push(new Student(1, 20, "student1@example.com"));
studentList.push(new Student(2, 22, "student2@example.com"));
studentList.push(new Student(3, 19, "student3@example.com"));
for (const student of studentList) {
    console.log(`ID: ${student.id}, Age: ${student.age}, Email: ${student.email}`);
}
