const sumArray = (...arrays) =>{
    return arrays.map(arr => arr.reduce((sum,sum)=>sum + sum ,0));
};

const result = sumArray([1,2],[6,7,8],[12,8]);
console.log(result)