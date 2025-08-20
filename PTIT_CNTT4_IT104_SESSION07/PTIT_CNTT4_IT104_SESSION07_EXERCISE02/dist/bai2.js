class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown() {
        if (this.speed < 0) {
            return `ko thê giam`;
        }
        this.speed -= 10;
        return `Tốc độ hiện tại: ${this.speed} km/h`;
    }
    speedUp() {
        if (this.speed > 150) {
            return `ko thê tang`;
        }
        this.speed += 10;
        return `Tốc độ hiện tại: ${this.speed} km/h`;
    }
    showSpeed() {
        console.log(`Tốc độ hiện tại: ${this.speed} km/h`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed = 0, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
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
