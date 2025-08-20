//Tinh ke thua
//1 class con khi ke thua class cha thi se co cac thuoc tinh va phuong thuc cua class cha
class Animal{
    protected name:string;
    constructor(name:string){
        this.name = name;
    }
    sound():string{
        return `Tieng keu cua ${this.name}`
    }
}

class Dog extends Animal{   
    sound(): string {
        return `${this.name} sua gau gau`
    }
}
class Cat extends Animal{
    sound(): string {
        return `${this.name} keu meo meo`
    }
}
const dog1 = new Dog("cho")
const cat1 = new Cat("meo")
console.log(dog1.sound());
console.log(cat1.sound());
