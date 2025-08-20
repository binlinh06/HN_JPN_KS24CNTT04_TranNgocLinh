class Employee{
    public name:string;
    protected company:string;
    private phone:number;
    constructor(name:string,company:string,phone:number){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo():string{
        return `Ten:${this.name},Cong ty:${this.company},DT:${this.phone}`
    }
}

const User = new Employee("Linh","hihi",2026)
console.log(User.printInfo());
