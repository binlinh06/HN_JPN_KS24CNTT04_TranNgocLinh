let phoneBooks = [];
function addContact(name, phone, email) {
    const contact = {
        name: name,
        phone: phone,
        email: email
    };
    phoneBooks.push(contact);
}
function displayContact() {
    if (phoneBooks.length === 0) {
        console.log("Danh sach trong");
    } else {
        console.log("-----Danh sach dien thoai");
        for (contact of phoneBooks) {
            console.log(`Tên: ${contact.name}`);
            console.log(`SĐT: ${contact.phone}`);
            console.log(`Email: ${contact.email}`);
            console.log("-------------------------------");
        }
    }
}

addContact("Nguyễn Văn A", "0123456789", "a@gmail.com");
addContact("Trần Thị B", "0987654321", "b@gmail.com");

displayContact();