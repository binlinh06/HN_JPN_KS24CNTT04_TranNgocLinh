class Book {
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
    // Getter
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getYear() {
        return this.year;
    }
    getInfo() {
        return `ID: ${this.id}, Tiêu đề: ${this.title}, Tác giả: ${this.author}, Năm XB: ${this.year}`;
    }
    // Setter
    setTitle(newTitle) {
        this.title = newTitle;
    }
    setAuthor(newAuthor) {
        this.author = newAuthor;
    }
    setYear(newYear) {
        this.year = newYear;
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
    deleteBookById(id) {
        const initialLength = this.books.length;
        this.books = this.books.filter(book => book.getId() !== id);
        if (this.books.length < initialLength) {
            console.log(`Sách ID ${id} đã được xóa khỏi thư viện.`);
        }
        else {
            console.log(`Không tìm thấy sách với ID ${id}.`);
        }
    }
    updateBookById(id, newTitle, newAuthor, newYear) {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            book.setYear(newYear);
            console.log(`Sách ID ${id} đã được cập nhật.`);
        }
        else {
            console.log(`Không tìm thấy sách với ID ${id}.`);
        }
    }
}
// --- Test ---
const book1 = new Book(1, "Đắc Nhân Tâm", "Dale Carnegie", 1936);
const book2 = new Book(2, "Tuổi Trẻ Đáng Giá Bao Nhiêu", "Rosie Nguyễn", 2016);
const book3 = new Book(3, "Nhà Giả Kim", "Paulo Coelho", 1988);
const myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
console.log("\nDanh sách ban đầu:");
myLibrary.showBooks();
console.log("\nCập nhật sách ID 2:");
myLibrary.updateBookById(2, "Tuổi Trẻ Đáng Giá Bao Nhiêu (Bản Mới)", "Rosie Nguyễn", 2020);
myLibrary.showBooks();
console.log("\nXóa sách ID 1:");
myLibrary.deleteBookById(1);
myLibrary.showBooks();
