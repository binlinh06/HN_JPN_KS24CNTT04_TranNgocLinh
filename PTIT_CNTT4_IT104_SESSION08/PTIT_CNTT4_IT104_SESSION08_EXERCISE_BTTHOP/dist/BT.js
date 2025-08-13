class Book {
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    getBookById(id) {
        return this.books.find((item) => item.id === id);
    }
    removeBookById(id) {
        let index = this.books.findIndex((item) => item.id === id);
        if (index == -1) {
            console.log("Ko co sach trong thu vien");
        }
        else {
            let confirmDelete = confirm(`Ban co muon xoa sach:${this.books[index].title} ko`);
            if (confirmDelete) {
                this.books.splice(index, 1);
            }
        }
    }
    updateBook(id, new_book) {
        let index = this.books.findIndex((item) => item.id === id);
        if (index == -1) {
            console.log("Ko co sach trong thu vien");
        }
        else {
            this.books[index] = new_book;
            console.log(`Đã cập nhật sách có id ${id} thành ${new_book.title}`);
        }
    }
    listBooks() {
        return this.books;
    }
    findBooksByTitleOrAuthor(searchTerm) {
        const lowerSearch = searchTerm.toLowerCase();
        return this.books.filter((book) => book.title.toLowerCase().includes(lowerSearch) ||
            book.author.toLowerCase().includes(lowerSearch));
    }
    getTotalBooks() {
        return this.books.length;
    }
    findBooksByYear(year) {
        return this.books.filter((book) => book.year === year);
    }
}
class EBook extends Book {
    constructor(id, title, author, year, fileSize) {
        super(id, title, author, year);
        this.fileSize = fileSize;
    }
}
const library = new Library();
// 1. Thêm sách
library.addBook(new Book(1, "Lập Trình TypeScript", "Nguyễn Văn A", 2023));
library.addBook(new Book(2, "Học JavaScript", "Trần Thị B", 2022));
library.addBook(new EBook(3, "Node.js Cơ Bản", "Lê Văn C", 2023, 5.5));
// 2. Tìm sách theo ID
console.log("Tìm sách ID 2:", library.getBookById(2));
// 3. Cập nhật sách
library.updateBook(2, new Book(2, "Học JavaScript Nâng Cao", "Trần Thị B", 2024));
// 4. Xóa sách
library.removeBookById(1);
// 5. Tìm theo tên hoặc tác giả
console.log("Tìm theo 'JavaScript':", library.findBooksByTitleOrAuthor("JavaScript"));
// 6. Đếm tổng số sách
console.log("Tổng số sách:", library.getTotalBooks());
// 7. Tìm theo năm xuất bản
console.log("Sách xuất bản 2023:", library.findBooksByYear(2023));
// 8. In danh sách toàn bộ sách
console.log("Danh sách sách:", library.listBooks());
