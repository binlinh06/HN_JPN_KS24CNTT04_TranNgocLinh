// Abstract class
abstract class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Method thông thường: đã có triển khai
    getName(): string {
        return `Tên con vật: ${this.name}`;
    }

    // Abstract method: chỉ định nghĩa, không triển khai
    abstract makeSound(): void;
}

// Lớp con kế thừa và bắt buộc triển khai abstract method
class Dog extends Animal {
    makeSound(): void {
        console.log("Gâu gâu!");
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Meo meo!");
    }
}

const dog = new Dog("Milo");
console.log(dog.getName()); // Dùng method thông thường từ lớp cha
dog.makeSound(); // "Gâu gâu!" (triển khai riêng của Dog)

const cat = new Cat("Luna");
console.log(cat.getName());
cat.makeSound();
