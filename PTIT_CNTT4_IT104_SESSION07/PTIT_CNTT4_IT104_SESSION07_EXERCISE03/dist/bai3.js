class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Tên: ${this.name}`);
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log("meo meo");
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log("gau gau");
    }
}
const myCat = new Cat("Mèo Mun");
const myDog = new Dog("Chó Vàng");
myCat.printName();
myCat.makeNoise();
myDog.printName();
myDog.makeNoise();
