class Book {
    private id: number;
    private title: string;
    private author: string;
    private year: number;

    constructor(id: number, title: string, author: string, year: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }

    // Getter
    getId(): number {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }

    getYear(): number {
        return this.year;
    }

    getInfo(): string {
        return `ID: ${this.id}, Tiêu đề: ${this.title}, Tác giả: ${this.author}, Năm XB: ${this.year}`;
    }

    // Setter
    setTitle(newTitle: string): void {
        this.title = newTitle;
    }

    setAuthor(newAuthor: string): void {
        this.author = newAuthor;
    }

    setYear(newYear: number): void {
        this.year = newYear;
    }
}

class Library {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    showBooks(): void {
        if (this.books.length === 0) {
            console.log("Thư viện hiện không có sách.");
            return;
        }
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getInfo()}`);
        });
    }

    deleteBookById(id: number): void {
        const initialLength = this.books.length;
        this.books = this.books.filter(book => book.getId() !== id);

        if (this.books.length < initialLength) {
            console.log(`Sách ID ${id} đã được xóa khỏi thư viện.`);
        } else {
            console.log(`Không tìm thấy sách với ID ${id}.`);
        }
    }

    updateBookById(id: number, newTitle: string, newAuthor: string, newYear: number): void {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            book.setYear(newYear);
            console.log(`Sách ID ${id} đã được cập nhật.`);
        } else {
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
