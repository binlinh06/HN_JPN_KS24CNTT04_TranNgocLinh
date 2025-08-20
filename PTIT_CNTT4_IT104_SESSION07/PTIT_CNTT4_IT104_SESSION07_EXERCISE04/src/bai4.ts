abstract class Person {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  public displayInfo(): void {
    console.log(`Tên: ${this.name}`);
  }
}

class Students extends Person{
    public id:number;
    constructor(name:string,id:number){
        super(name)
        this.id = id
    }
    public displayInfo(): void {
        super.displayInfo();
        console.log(`ID: ${this.id}`);
    }
}

class Teacher extends Person{
        public subject:string
    constructor(name:string,subject:string){
        super(name)
        this.subject = subject
    }
    public displayInfo(): void {
        super.displayInfo();
        console.log(`Môn: ${this.subject}`);
    }
}


const student = new Students("Nguyễn Văn A",1);
const teacher = new Teacher("Trần Thị B", "Toán học");

student.displayInfo(); 
teacher.displayInfo(); 