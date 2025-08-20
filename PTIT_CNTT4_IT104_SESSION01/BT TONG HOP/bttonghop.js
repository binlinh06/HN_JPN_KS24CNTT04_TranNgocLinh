class Students{
    constructor(id,name,age,scores){
        this.id = id;
        this.name = name;
        this.age = age;
        this.scores=scores;
    }
    DTB(){
        let total = 0;
        let sum = 0;
        for (let i = 0; i < this.scores.length; i++) {
            total += this.scores[i]
        }
        return total/this.scores.length
    }
}
let students = [];
let sv1 = new Students("01","Linh1",18,[6,7,8])
let sv2 = new Students("02","Linh2",28,[6,7,8])
let sv3 = new Students("03","Linh3",38,[6,7,8])
let sv4 = new Students("04","Linh4",48,[6,7,8])
let sv5 = new Students("05","Linh5",58,[6,7,8])
students.push(sv1,sv2,sv3,sv4,sv5);
console.log(students);
    let total = 0;
for (let i = 0; i < students.length; i++) {    

    total+= students[i].DTB()
}
console.log("result",total/5);
