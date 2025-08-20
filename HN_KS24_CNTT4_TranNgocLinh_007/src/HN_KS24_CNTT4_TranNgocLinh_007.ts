abstract class Vehicle {
  static nextId = 1;
  id: number;
  type: string;
  rentalPricePerDay: number;
  isAvailable: boolean = true;
  constructor(type: string, rentalPricePerDay: number) {
    this.id = Vehicle.nextId++;
    this.type = type;
    this.rentalPricePerDay = rentalPricePerDay;
  }
  rent() {
    this.isAvailable = false;
  }
  returnVehicle() {
    this.isAvailable = true;
  }
  abstract calculateRentalCost(days: number): number;
  abstract getFeatures(): string[];
  abstract getInsurancePolicy(): string;
}

class Car extends Vehicle {
  calculateRentalCost(days: number): number {
    return this.rentalPricePerDay * days;
  }
  getFeatures(): string[] {
    return ["Điều hòa", "GPS dẫn đường"];
  }
  getInsurancePolicy(): string {
    return "Bảo hiểm toàn diện, miễn thường $500";
  }
}
class Motorcycle extends Vehicle {
  calculateRentalCost(days: number): number {
    return this.rentalPricePerDay * days;
  }
  getFeatures(): string[] {
    return ["Mũ bảo hiểm đi kèm"];
  }
  getInsurancePolicy(): string {
    return "Bảo hiểm trách nhiệm dân sự cơ bản";
  }
}
class Truck extends Vehicle {
  calculateRentalCost(days: number): number {
    return this.rentalPricePerDay * days;
  }
  getFeatures(): string[] {
    return ["Thùng hàng lớn", "Bửng nâng thủy lực"];
  }
  getInsurancePolicy(): string {
    return "Bảo hiểm hàng hóa và phương tiện thương mại";
  }
}
class Customer {
  static nextId = 1;
  id: number;
  name: string;
  email: string;
  phone: string;
  constructor(name: string, email: string, phone: string) {
    this.id = Customer.nextId++;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
  getDetails() {
    return `ID: ${this.id}, Tên: ${this.name}, Email: ${this.email}, SĐT: ${this.phone}`;
  }
}
class Rental {
  private static nextId = 1;
  public rentalId: number;
  public totalCost: number;

  constructor(
    public customer: Customer,
    public vehicle: Vehicle,
    public days: number
  ) {
    this.rentalId = Rental.nextId++;
    this.totalCost = vehicle.calculateRentalCost(days);
  }

  getDetails() {
    return `HĐ ${this.rentalId}: ${this.customer.name} thuê ${this.vehicle.type} (ID: ${this.vehicle.id}) trong ${this.days} ngày, Tổng: ${this.totalCost} VND`;
  }
}

class RentalAgency {
  vehicles: Vehicle[] = [];
  customers: Customer[] = [];
  rentals: Rental[] = [];
  addVehicle(vehicle: Vehicle): void {
    this.vehicles.push(vehicle);
  }
  addCustomer(name: string, email: string, phone: string): Customer {
    const customer = new Customer(name, email, phone);
    this.customers.push(customer);
    return customer;
  }
  rentVehicle(
    customerId: number,
    vehicleId: number,
    days: number
  ): Rental | null {
    const customer = this.customers.find((c) => c.id === customerId);
    const vehicle = this.vehicles.find((v) => v.id === vehicleId);
    if (!customer || !vehicle) return null;
    vehicle.rent();
    const rental = new Rental(customer, vehicle, days);
    this.rentals.push(rental);
    return rental;
  }
  returnVehicle(vehicleId: number): void {
    const vehicle = this.vehicles.find((v) => v.id === vehicleId);
    if (vehicle) {
      vehicle.returnVehicle();
    }
  }
  listAvailableVehicles() {
    this.vehicles
      .filter((v) => v.isAvailable)
      .forEach((v) =>
        console.log(
          `ID: ${v.id}, Loại: ${v.type}, Giá/ngày: ${v.rentalPricePerDay}`
        )
      );
  }
  listCustomerRentals(customerId: number): void {
    this.rentals
      .filter((r) => r.customer.id === customerId)
      .forEach((r) => console.log(r.getDetails()));
  }
}
const agency = new RentalAgency();
agency.addVehicle(new Car("Car", 500000));
agency.addVehicle(new Motorcycle("Motorcycle", 200000));
agency.addVehicle(new Truck("Truck", 800000));
agency.addCustomer("Doan Manh Duy", "duy@email.com", "0123456789");
agency.addCustomer("Tran ngoc Linh", "Linh@email.com", "0987654321");
let choie: number;
do {
  console.log("\n==========MENU==========\n");
  console.log("1.Thêm khách hàng mới.\n");
  console.log("2.Thêm phương tiện mới\n");
  console.log("3.Thuê xe\n");
  console.log("4.Trả xe.\n");
  console.log("5.Hiển thị danh sách xe còn trống\n");
  console.log("6.Hiển thị danh sách hợp đồng của một khách hàng\n");
  console.log("7.Tính và hiển thị tổng doanh thu\n");
  console.log("8.Đếm số lượng từng loại xe.\n");
  console.log("9.Tìm kiếm và hiển thị thông tin bằng mã định danh\n");
  console.log("10.Hiển thị tính năng và chính sách bảo hiểm của một xe\n");
  console.log("11.Thoát chương trình.\n");
  choie = Number(prompt("Moi ban chon:"));
  switch (choie) {
    case 1: {
      const name = prompt("Tên: ");
      const email = prompt("Email: ");
      const phone = prompt("SĐT: ");
      agency.addCustomer(name, email, phone);
      break;
    }
    case 2: {
      const type = prompt("Loại (Car/Motorcycle/Truck): ");
      const price = Number(prompt("Giá/ngày: "));
      if (type === "Car") agency.addVehicle(new Car(type, price));
      else if (type === "Motorcycle")
        agency.addVehicle(new Motorcycle(type, price));
      else if (type === "Truck") agency.addVehicle(new Truck(type, price));
      break;
    }
    case 3: {
      const cid = Number(prompt("ID KH: "));
      const vid = Number(prompt("ID Xe: "));
      const days = Number(prompt("Số ngày thuê: "));
      const rental = agency.rentVehicle(cid, vid, days);
      if (rental) {
        console.log(rental.getDetails());
      } else {
        console.log("Không thuê được.");
      }
      break;
    }
    case 4: {
      const vid = Number(prompt("ID Xe: "));
      agency.returnVehicle(vid);
      break;
    }
    case 5: {
      agency.listAvailableVehicles();
      break;
    }
    case 6: {
      const cid = Number(prompt("ID KH: "));
      agency.listCustomerRentals(cid);
      break;
    }
    case 7:
      break;
    case 8:
      break;    
    case 9:
      break;
    case 10:
      break;
    case 11:
      console.log("Thoat thanh cong!");
      break;
    default:
      console.log("Moi ban chon lai!");
  }
} while (choie !== 11);
