abstract class Animal {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  public abstract makeNoise(): void;
  public printName(): void {
    console.log(`Tên: ${this.name}`);
  }
}

class Cat extends Animal {
  public makeNoise(): void {
    console.log("meo meo");
  }
}

class Dog extends Animal {
  public makeNoise(): void {
    console.log("gau gau");
  }
}


const myCat = new Cat("Mèo Mun");
const myDog = new Dog("Chó Vàng");

myCat.printName();
myCat.makeNoise();

myDog.printName();
myDog.makeNoise();