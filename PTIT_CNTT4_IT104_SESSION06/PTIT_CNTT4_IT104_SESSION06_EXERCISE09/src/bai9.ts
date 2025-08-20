class Book {
    constructor(
        public id: number,
        public title: string,
        public author: string,
        public stock: number,
        public status: string
    ) {}
}

class Member {
    constructor(
        public id: number,
        public name: string,
        public contact: string,
        public lendedBooks: LendedBook[] = [],
        public status: string = "active"
    ) {}
}

class LendedBook {
    constructor(
        public memberId: number,
        public bookId: number,
        public dueDate: Date
    ) {}
}

class Library {
    books: Book[] = [];
    members: Member[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    showBooks(): void {
        if (this.books.length === 0) {
            console.log("Thư viện chưa có sách.");
        } else {
            this.books.forEach(book => {
                console.log(`ID: ${book.id}, Tiêu đề: ${book.title}, Tác giả: ${book.author}, Số lượng: ${book.stock}, Trạng thái: ${book.status}`);
            });
        }
    }

    registerMember(id: number, name: string, contact: string): void {
        const newMember = new Member(id, name, contact);
        this.members.push(newMember);
        console.log(`Đã đăng ký thành viên: ${name}`);
    }

    blockMember(id: number): void {
        const member = this.members.find(m => m.id === id);
        if (member) {
            member.status = "blocked";
            console.log(`Đã khóa thành viên: ${member.name}`);
        } else {
            console.log("Không tìm thấy thành viên.");
        }
    }

    showMembers(): void {
        if (this.members.length === 0) {
            console.log("Thư viện chưa có thành viên.");
        } else {
            this.members.forEach(member => {
                console.log(`ID: ${member.id}, Tên: ${member.name}, Liên hệ: ${member.contact}, Trạng thái: ${member.status}`);
            });
        }
    }
}

const library = new Library();

const book1 = new Book(1, "Lập trình TypeScript", "Nguyễn Văn A", 5, "có sẵn");
const book2 = new Book(2, "OOP trong Java", "Trần Thị B", 3, "có sẵn");
const book3 = new Book(3, "Cấu trúc dữ liệu", "Lê Văn C", 2, "có sẵn");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

console.log("\nDanh sách sách trong thư viện:");
library.showBooks();

library.registerMember(1, "Nguyễn Văn D", "0123456789");
library.registerMember(2, "Trần Thị E", "0987654321");
library.registerMember(3, "Lê Văn F", "0911223344");

console.log("\nDanh sách thành viên:");
library.showMembers();

library.blockMember(2);

console.log("\nDanh sách thành viên sau khi khóa:");
library.showMembers();
