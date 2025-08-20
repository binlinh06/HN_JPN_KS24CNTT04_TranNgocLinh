class Audience {
  static nextId = 1;
  id: number;
  name: string;
  email: string;
  phone: string;
  constructor(name: string, emal: string, phone: string) {
    this.id = Audience.nextId++;
    this.name = name;
    this.email = this.email;
    this.phone = phone;
  }
  getDetails(): void {
    console.log(
      `ID:${this.id},Tên:${this.name},Email:${this.email},DT:${this.phone}`
    );
  }
}
abstract class Movie {
  static nextId = 1;
  id: number;
  title: string;
  genre: string;
  ticketPrice: number;
  isShowing: boolean = false;
  constructor(title: string, genre: string, ticketPrice: number) {
    this.id = Movie.nextId++;
    this.title = title;
    this.genre = genre;
    this.ticketPrice = ticketPrice;
  }
  startShow(): void {
    this.isShowing = true;
  }
  stopShow(): void {
    this.isShowing = false;
  }
  abstract calculateTicketCost(quantity: number): number;
  abstract getSpecialOffers(): string[];
  abstract getMovieInfo(): string;
}

class ActionMovie extends Movie {
  calculateTicketCost(quantity: number): number {
    return this.ticketPrice * quantity;
  }
  getSpecialOffers(): string[] {
    return ["Miễn phí bắp rang", "Tặng poster"];
  }
  getMovieInfo(): string {
    return "Phim hành động gay cấn, kỹ xảo hoành tráng";
  }
}
class ComedyMovie extends Movie {
  calculateTicketCost(quantity: number): number {
    let root_price = this.ticketPrice;
    return quantity > 4 ? root_price * 0.9 * quantity : root_price * quantity;
  }
  getSpecialOffers(): string[] {
    return ["Giảm 10% cho nhóm trên 4 người"];
  }
  getMovieInfo(): string {
    return "Phim hài nhẹ nhàng, vui nhộn";
  }
}
class AnimationMovie extends Movie {
  calculateTicketCost(quantity: number): number {
    return this.ticketPrice * quantity;
  }
  getSpecialOffers(): string[] {
    return ["Giảm giá cho trẻ em dưới 12 tuổi"];
  }
  getMovieInfo(): string {
    return "Phim hoạt hình với hình ảnh sống động";
  }
}
class TicketBooking {
  static nextId = 1;
  bookingId: number;
  audience: Audience;
  movie: Movie;
  quantity: number;
  totalPrice: number;
  constructor(audience:Audience,movie:Movie, quantity: number, totalPrice: number) {
    this.bookingId = TicketBooking.nextId++;
    this.audience = audience
    this.movie = movie
    this.quantity = quantity;
    this.totalPrice = totalPrice;
  }
  getDetails(): void {
    console.log(
      `ID booking:${this.bookingId}, Số lượng vé:${this.quantity},Tổng giá vé:${this.totalPrice}`
    );
  }
}
class Cinema {
  movies: Movie[] = [];
  audiences: Audience[] = [];
  bookings: TicketBooking[] = [];
  addMovie(movie: Movie): void {
    this.movies.push(movie);
  }
  addAudience(name: string, email: string, phone: string): Audience {
    let newAudience = new Audience(name, email, phone);
    this.audiences.push(newAudience);
    return newAudience;
  }
  bookTickets(
    audienceId: number,
    movieId: number,
    quantity: number
  ): TicketBooking | null {
    let findAudienceById = this.audiences.find(
      (item) => item.id === audienceId
    );
    let findMovieById = this.movies.find(
      (item) => item.id === movieId
    );
    if(findAudienceById && findMovieById && quantity > 0 && findMovieById.isShowing ){
      let newBooking = new TicketBooking(findAudienceById,findMovieById,quantity,findMovieById.calculateTicketCost(quantity))
      this.bookings.push(newBooking)  
      return newBooking
    }
   }
   cancleMovie(movieId:number):void{
    let findMovieById = this.movies.find(item => item.id === movieId)
    if(findMovieById){
      findMovieById.isShowing = false
    }
   }
   listShowingMovies():void{
    this.movies.filter((item) => item.isShowing).forEach((v)=>console.log(`phim dang chieu thu${v.id+1}:Ten:${v.title}`));
    
   }
}

let choice: number;
do {
  console.log("\n==========MENU==========\n");
  console.log("1.Thêm khán giả mới.\n");
  console.log("2.Thêm phim mới (chọn loại: ActionMovie, ComedyMovie, AnimationMovie).\n");
  console.log("3.Đặt vé (chọn khán giả, chọn phim, nhập số lượng vé).\n");
  console.log("4.Ngừng chiếu phim.\n");
  console.log("5.Hiển thị danh sách phim đang chiếu\n");
  console.log("6.Hiển thị các đặt vé của một khán giả \n");
  console.log("7.Tính và hiển thị tổng doanh thu\n");
  console.log("8.Đếm số lượng từng thể loại phim \n");
  console.log("9.Tìm kiếm và hiển thị thông tin bằng mã định danh \n");
  console.log("10.Hiển thị ưu đãi của một phim  \n");
  console.log("11.Thoát chương trình.\n");
  choice = Number(prompt("Moi ban chon:"));

  switch (choice) {
    case 1: {
      break;
    }
    case 2: {
      break;
    }
    case 3: {
      break;
    }
    case 4: {
      break;
    }
    case 5:
      break;
    case 6: {
      break;
    }
    case 7:
      break;
    case 8:
      break;
    case 9: {
      break;
    }
    case 10: {
      break;
    }
    case 11:
      console.log("Thoát!");
      break;
    default:
      console.log("Chọn sai");
  }
} while (choice !== 11);
