function generic<T>(param:T):T{
  return param
}
generic("m");
generic(1);
generic(true)
//1.Kieu mang
let number1 :number[] = [1,2,3,4]
let numbers: Array<number> = [3,4,5,2] 
let studentName: Array<string> = ["hoa","cc"]
//2.Kieu record
const user_info:Record <string,string | number> = {
  name: "linh",
  age :20
}

//3.Kieu partial(Kiểu tùy chọn)

interface Contact{
  email:string;
  phone:string 
}

const partitalUser:Partial<Contact> = {
  email:"BIN@gmail.com",
}

//4.Kieu Readonly : chi doc ko dc cap nhap chinh sua

interface Score{
  x:number,
  y:number
}

const score1 : Readonly<Score> = {
  x:10,
  y:5
}

//5.Pick :Tuy chon

interface User{
  id:string,
  name:string,
  email:string,
  address:string,
  salary:string,

}

let user1:Pick<User,"name" | "address" | "id"> ={
  name:"hoa",
  address:"Ha noi",
  id:"HN"
}

//6.Kieu Omit

let User2:Omit<User,"salary"> = {
  id :"1",
  name:"Hoa",
  email:"@",
  address:"HN"
}