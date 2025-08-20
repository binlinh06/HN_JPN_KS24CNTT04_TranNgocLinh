let students = [];
function addStudent(id, name, age, subjects) {
    const newStudent = {
        id: id,
        name: name,
        age: age,
        subjects: subjects,
    };
    students.push(newStudent);
}
addStudent(1, "hong", 20, [
    { subjectName: "C", score: 8 },
    { subjectName: "Cau truc du lieu", score: 10 },
]);
addStudent(2, "anh", 20, [{ subjectName: "C", score: 4 }]);
function printfStudent() {
    for (let i = 0; i < students.length; i++) {
        console.log(`Thong tin sinh vien thu ${i + 1} : Name_${students[i].name}...`);
    }
}
// Cập nhật tên và tuổi sinh viên (ví dụ đơn giản)
function updateStudent(id, newName, newAge) {
    const student = students.find((s) => s.id === id);
    if (student) {
        student.name = newName;
        student.age = newAge;
        console.log(` Đã cập nhật sinh viên ID ${id}`);
    }
    else {
        console.log(` Không tìm thấy sinh viên có ID ${id}`);
    }
}
function deleteStudent(id) {
    const index = students.findIndex((s) => s.id === id);
    if (index !== -1) {
        students.splice(index, 1);
    }
    else {
        console.log(` Không tìm thấy sinh viên có ID ${id}`);
    }
}
