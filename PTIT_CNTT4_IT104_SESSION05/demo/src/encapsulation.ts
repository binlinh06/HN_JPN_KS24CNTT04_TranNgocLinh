class Student{
    public fullname:string;
    private age:number
    protected address:string
    constructor(value_fullname:string,value_age:number,address:string){
        this.fullname = value_fullname;
        this.address = address
        this.age = value_age;
    }
    getInfo():string{
        return `xin chao ${this.fullname},${this.age} tuoi ,o ${this.address}`
    }
    setAge(new_age:number){
        this.age = new_age
    }
}

let sv1 = new Student("Lan Hong", 25,"Hn");
sv1.setAge(22)
console.log(sv1.getInfo());
