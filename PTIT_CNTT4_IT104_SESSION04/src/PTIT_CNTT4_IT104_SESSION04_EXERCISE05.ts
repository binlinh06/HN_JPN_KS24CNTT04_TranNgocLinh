type Personn = {
    name:string,
    age:number
}

type Employee  ={
    employeeId:string,
    department:string
}

type StaffMember = Personn & Employee;

function printfStaff(staff:StaffMember):void{
    console.log(`Nhân viên:${staff.name} (${staff.age}) , Mã nhân viên: ${staff.employeeId} - Phòng: ${staff.department}`);
    
}
const staff1: StaffMember = {
    name: "Nguyễn Văn A",
    age: 28,
    employeeId: "EMP001",
    department: "Kế toán"
};

printfStaff(staff1);