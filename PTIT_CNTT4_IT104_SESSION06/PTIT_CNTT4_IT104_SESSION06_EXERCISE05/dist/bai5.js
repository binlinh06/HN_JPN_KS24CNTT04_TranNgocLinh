class Vehicle {
    constructor(initialSpeed = 0) {
        this.speed = initialSpeed;
    }
    speedUp(value) {
        this.speed += value;
        console.log(`Tăng tốc: tốc độ hiện tại là ${this.speed} km/h`);
    }
    slowDown(value) {
        this.speed = Math.max(0, this.speed - value);
        console.log(`Giảm tốc: tốc độ hiện tại là ${this.speed} km/h`);
    }
    stop() {
        this.speed = 0;
        console.log(`Dừng xe: tốc độ hiện tại là ${this.speed} km/h`);
    }
}
const myVehicle = new Vehicle();
myVehicle.speedUp(50);
myVehicle.slowDown(20);
myVehicle.stop();
