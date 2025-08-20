class Student {
    constructor(value_fullname, value_age, address) {
        this.fullname = value_fullname;
        this.address = address;
        this.age = value_age;
    }
    getInfo() {
        return `xin chao ${this.fullname},${this.age} tuoi ,o ${this.address}`;
    }
    setAge(new_age) {
        this.age = new_age;
    }
}
let sv1 = new Student("Lan Hong", 25, "Hn");
sv1.setAge(22);
console.log(sv1.getInfo());
