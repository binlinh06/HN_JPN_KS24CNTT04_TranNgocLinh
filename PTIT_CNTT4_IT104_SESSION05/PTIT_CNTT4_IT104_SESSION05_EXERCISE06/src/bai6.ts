class Book {
  private title: string;
  private author: string;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
  getInfo(): string {
    return `Tiêu đề: ${this.title}, Tác giả: ${this.author}`;
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
}

const book1 = new Book("Đắc Nhân Tâm", "Dale Carnegie");
const book2 = new Book("Tuổi Trẻ Đáng Giá Bao Nhiêu", "Rosie Nguyễn");
const book3 = new Book("Nhà Giả Kim", "Paulo Coelho");
const book4 = new Book("Muôn Kiếp Nhân Sinh", "Nguyên Phong");
const book5 = new Book("Sapiens", "Yuval Noah Harari");

const myLibrary = new Library();

// Thêm sách vào thư viện
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);
myLibrary.addBook(book5);

// Hiển thị danh sách sách
myLibrary.showBooks();
