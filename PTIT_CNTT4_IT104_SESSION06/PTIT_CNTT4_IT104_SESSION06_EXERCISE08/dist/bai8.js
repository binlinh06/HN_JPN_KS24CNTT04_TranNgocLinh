class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
class Member {
    constructor(id, name, contact, lendedBooks = [], status = "active") {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = lendedBooks;
        this.status = status;
    }
}
class LendedBook {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        if (this.books.length === 0) {
            console.log("Thư viện chưa có sách.");
        }
        else {
            this.books.forEach(book => {
                console.log(`ID: ${book.id}, Tiêu đề: ${book.title}, Tác giả: ${book.author}, Số lượng: ${book.stock}, Trạng thái: ${book.status}`);
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
library.showBooks();
