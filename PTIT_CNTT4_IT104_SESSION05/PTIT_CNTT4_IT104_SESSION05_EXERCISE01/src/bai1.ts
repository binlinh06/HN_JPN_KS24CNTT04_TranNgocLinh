class Vehicle{
    name:string;
    year:number;
    company:string
    constructor(name:string,year:number,company:string){
        this.name = name;
        this.year = year;
        this.company = company
    }
    getInfo():string{
        return `Ten:${this.name} ,Nam:${this.year},Cong ty:${this.company}`
    }
}

const Vehicle1 = new Vehicle("Civic",20,"hihi");
const Vehicle2 = new Vehicle("Mec",20,"haha")

console.log(Vehicle1.getInfo());
console.log(Vehicle2.getInfo());

