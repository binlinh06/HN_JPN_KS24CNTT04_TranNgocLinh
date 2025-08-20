class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
const circle = new Circle(5);
console.log("Hình tròn:");
console.log("Diện tích:", circle.calculateArea().toFixed(2));
console.log("Chu vi:", circle.calculatePerimeter().toFixed(2));
const rectangle = new Rectangle(4, 6);
console.log("\nHình chữ nhật:");
console.log("Diện tích:", rectangle.calculateArea());
console.log("Chu vi:", rectangle.calculatePerimeter());
