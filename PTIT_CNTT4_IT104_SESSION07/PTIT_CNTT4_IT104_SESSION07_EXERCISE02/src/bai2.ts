class Vehicle {
  protected name: string;
  protected speed: number;
  protected id: string;
  constructor(name: string, speed: number, id: string) {
    this.name = name;
    this.speed = speed;
    this.id = id;
  }
  public slowDown(): string {
    if (this.speed < 0) {
      return `ko thê giam`;
    }
    this.speed -= 10;
    return `Tốc độ hiện tại: ${this.speed} km/h`;
  }
  public speedUp(): string {
    if (this.speed > 150) {
      return `ko thê tang`;
    }
    this.speed += 10;
    return `Tốc độ hiện tại: ${this.speed} km/h`;
  }

  public showSpeed(): void {
    console.log(`Tốc độ hiện tại: ${this.speed} km/h`);
  }
}

class Bicycle extends Vehicle {
  private gear: number;
  constructor(name: string, speed: number = 0, id: string, gear: number) {
    super(name, speed, id);
    this.gear = gear;
  }
  public showInfo(): void {
    console.log(`Tên xe: ${this.name}`);
    console.log(`Tốc độ: ${this.speed} km/h`);
    console.log(`Mã định danh: ${this.id}`);
    console.log(`Số bánh răng: ${this.gear}`);
  }
}
const myBike = new Bicycle("Xe đạp thể thao", 10, "B001", 21);

myBike.showSpeed();
myBike.speedUp();
myBike.showSpeed();
myBike.slowDown();
myBike.showSpeed();

console.log("\nThông tin chi tiết xe đạp:");
myBike.showInfo();
