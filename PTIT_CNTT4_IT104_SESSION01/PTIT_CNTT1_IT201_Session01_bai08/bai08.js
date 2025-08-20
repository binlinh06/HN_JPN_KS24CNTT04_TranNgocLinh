const a = [1,2,6];
const b =[3,4,5];

const insert = (a,b, index) =>{
    if(index < 0){
        console.log("index khong hop le");    
    }
    const result = [
        ...a.slice(0, index), ...b, ...a.slice(index)
    ];
    return result;
};
console.log(insert(a,b,2));
console.log(insert(["a","b","f"], ["c","d","e"], 2));
