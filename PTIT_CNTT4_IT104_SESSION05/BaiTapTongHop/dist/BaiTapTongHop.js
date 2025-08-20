class Animal {
    constructor(name, age, special) {
        this.name = name;
        this.age = age;
        this.special = special;
    }
    speak() {
        console.log(`Am thah cua con vat: ${this.name}`);
    }
    setName(new_Name) {
        this.name = new_Name;
    }
    getInfo() {
        return `ten:${this.name},tuoi:${this.age},loai:${this.special}`;
    }
}
class Dog extends Animal {
    speak() {
        console.log("am thanh:Woof!");
    }
}
class Cat extends Animal {
    constructor(name, age, special, breed) {
        super(name, age, special);
        this.age = age;
        this.special = special;
        this.breed = breed;
    }
    speak() {
        console.log("am thanh:Meow!");
    }
}
class Rabbit extends Animal {
    speak() {
        console.log("am thanh:Squeak!");
    }
}
let meomeo = new Cat("Meo", 12, "Meo", "Meo");
meomeo.setName("meomeo1");
console.log(meomeo.getInfo());
