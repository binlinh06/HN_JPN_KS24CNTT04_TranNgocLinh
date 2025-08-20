interface ChangeSpeed {
    speedUp(value: number): void;
    slowDown(value: number): void;
    stop(): void;
}

class Vehicle implements ChangeSpeed {
    private speed: number;

    constructor(initialSpeed: number = 0) {
        this.speed = initialSpeed;
    }

    speedUp(value: number): void {
        this.speed += value;
        console.log(`Tăng tốc: tốc độ hiện tại là ${this.speed} km/h`);
    }

    slowDown(value: number): void {
        this.speed = Math.max(0, this.speed - value);
        console.log(`Giảm tốc: tốc độ hiện tại là ${this.speed} km/h`);
    }

    stop(): void {
        this.speed = 0;
        console.log(`Dừng xe: tốc độ hiện tại là ${this.speed} km/h`);
    }
}

const myVehicle = new Vehicle();

myVehicle.speedUp(50);
myVehicle.slowDown(20);
myVehicle.stop();
