class Vehicle {
  public name: string;
  protected year: number;
  private company: string;
  readonly id: number;
  constructor(name: string, year: number, company: string, id: number) {
    this.name = name;
    this.year = year;
    this.company = company;
    this.id = id;
  }
  printInfo(): string {
    return `Tên: ${this.name}, Năm: ${this.year}, Hãng: ${this.company}, ID: ${this.id}`;
  }
}
const car = new Vehicle("Toyota Camry", 2020, "Toyota Motor Corporation", 1001);
console.log(car.printInfo());