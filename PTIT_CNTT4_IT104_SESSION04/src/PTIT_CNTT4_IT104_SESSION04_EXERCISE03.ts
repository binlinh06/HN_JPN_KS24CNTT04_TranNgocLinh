type Students ={
    name:string,
    age:number,
    email:string
}

function printfStudents(student:Students):void{
    console.log(`Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.age}`);
    
}

const student1: Students = {
    name: "Nguyễn Văn A",
    age: 20,
    email: "nguyenvana@example.com"
};

printfStudents(student1);
