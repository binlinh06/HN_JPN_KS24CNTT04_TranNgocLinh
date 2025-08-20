class Book {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId() {
        return this.id;
    }
    getInfo() {
        return `ID: ${this.id}, Tiêu đề: ${this.title}, Tác giả: ${this.author}`;
    }
    updateInfo(newTitle, newAuthor) {
        this.title = newTitle;
        this.author = newAuthor;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        if (this.books.length === 0) {
            console.log("Thư viện hiện không có sách.");
            return;
        }
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getInfo()}`);
        });
    }
    updateBookById(id, newTitle, newAuthor) {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.updateInfo(newTitle, newAuthor);
            console.log(`Sách ID ${id} đã được cập nhật.`);
        }
        else {
            console.log(`Không tìm thấy sách với ID ${id}.`);
        }
    }
}
// --- Test ---
const book1 = new Book(1, "Đắc Nhân Tâm", "Dale Carnegie");
const book2 = new Book(2, "Tuổi Trẻ Đáng Giá Bao Nhiêu", "Rosie Nguyễn");
const book3 = new Book(3, "Nhà Giả Kim", "Paulo Coelho");
const myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
console.log("\nDanh sách ban đầu:");
myLibrary.showBooks();
myLibrary.updateBookById(2, "Tuổi Trẻ Đáng Giá Bao Nhiêu - Phiên bản mới", "Rosie Nguyễn");
console.log("\nDanh sách sau khi cập nhật:");
myLibrary.showBooks();
