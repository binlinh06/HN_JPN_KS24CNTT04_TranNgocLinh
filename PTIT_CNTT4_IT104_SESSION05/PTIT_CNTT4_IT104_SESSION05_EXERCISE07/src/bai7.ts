class Book {
    private id: number;
    private title: string;
    private author: string;

    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    getId(): number {
        return this.id;
    }

    getInfo(): string {
        return `ID: ${this.id}, Tiêu đề: ${this.title}, Tác giả: ${this.author}`;
    }

    updateInfo(newTitle: string, newAuthor: string): void {
        this.title = newTitle;
        this.author = newAuthor;
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

    updateBookById(id: number, newTitle: string, newAuthor: string): void {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.updateInfo(newTitle, newAuthor);
            console.log(`Sách ID ${id} đã được cập nhật.`);
        } else {
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

console.log("\n📚 Danh sách sau khi cập nhật:");
myLibrary.showBooks();
