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

    getTitle(): string {
        return this.title;
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

    searchBooksByTitle(keyword: string): void {
        const foundBooks = this.books.filter(book =>
            book.getTitle().toLowerCase().includes(keyword.toLowerCase())
        );

        if (foundBooks.length > 0) {
            console.log(`Kết quả tìm kiếm với từ khóa "${keyword}":`);
            foundBooks.forEach((book, index) => {
                console.log(`${index + 1}. ${book.getInfo()}`);
            });
        } else {
            console.log(`Không tìm thấy sách nào với từ khóa "${keyword}".`);
        }
    }
}

// --- Test ---
const book1 = new Book(1, "Đắc Nhân Tâm", "Dale Carnegie");
const book2 = new Book(2, "Tuổi Trẻ Đáng Giá Bao Nhiêu", "Rosie Nguyễn");
const book3 = new Book(3, "Nhà Giả Kim", "Paulo Coelho");
const book4 = new Book(4, "Tuổi Trẻ Và Khát Vọng", "Nguyễn Văn A");

const myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);

console.log("\nDanh sách ban đầu:");
myLibrary.showBooks();

console.log("\nTìm kiếm sách chứa từ 'tuổi trẻ':");
myLibrary.searchBooksByTitle("tuổi trẻ");

console.log("\nTìm kiếm sách chứa từ 'giả kim':");
myLibrary.searchBooksByTitle("giả kim");
