function printfStaff(staff) {
    console.log(`Nhân viên:${staff.name} (${staff.age}) , Mã nhân viên: ${staff.employeeId} - Phòng: ${staff.department}`);
}
const staff1 = {
    name: "Nguyễn Văn A",
    age: 28,
    employeeId: "EMP001",
    department: "Kế toán"
};
printfStaff(staff1);
