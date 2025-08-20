type Subject = {
  subjectName: string;
  score: number | string;
};
type Student = {
  id: number;
  name: string;
  age: number;
  subjects: Subject[];
};

let students: Student[] = [];

function addStudent(
  id: number,
  name: string,
  age: number,
  subjects: Subject[]
) {
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

function printfStudent(): void {
  for (let i = 0; i < students.length; i++) {
    console.log(
      `Thong tin sinh vien thu ${i + 1} : Name_${students[i].name}...`
    );
  }
}

// Cập nhật tên và tuổi sinh viên (ví dụ đơn giản)
function updateStudent(id: number, newName: string, newAge: number) {
  const student = students.find((s) => s.id === id);
  if (student) {
    student.name = newName;
    student.age = newAge;
    console.log(` Đã cập nhật sinh viên ID ${id}`);
  } else {
    console.log(` Không tìm thấy sinh viên có ID ${id}`);
  }
}

function deleteStudent(id: number) {
  const index = students.findIndex((s) => s.id === id);
  if (index !==-1) {
    students.splice(index, 1);
  } else {
    console.log(` Không tìm thấy sinh viên có ID ${id}`);
  }
}
