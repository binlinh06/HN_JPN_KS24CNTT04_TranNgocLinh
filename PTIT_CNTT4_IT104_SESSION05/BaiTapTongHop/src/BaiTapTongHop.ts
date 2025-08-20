class Animal {
  private name: string;
  protected age: number;
  public special: string;
  constructor(name: string, age: number, special: string) {
    this.name = name;
    this.age = age;
    this.special = special;
  }
  speak(): void {
    console.log(`Am thah cua con vat: ${this.name}`);
  }
  setName(new_Name: string): void {
    this.name = new_Name;
  }
  getInfo():string{
    return `ten:${this.name},tuoi:${this.age},loai:${this.special}`
  }
}

class Dog extends Animal {
  public breed: string;
  speak(): void {
    console.log("am thanh:Woof!");
  }
}

class Cat extends Animal {
  public breed: string;
  constructor(name: string, age: number, special: string, breed: string) {
    super(name, age, special);
    this.age = age;
    this.special = special;
    this.breed = breed;
  }
  speak(): void {
    console.log("am thanh:Meow!");
  }
}
class Rabbit extends Animal {
  public breed: string;
  speak(): void {
    console.log("am thanh:Squeak!");
  }
}
let meomeo = new Cat("Meo", 12, "Meo", "Meo");
meomeo.setName("meomeo1")
console.log(meomeo.getInfo());
