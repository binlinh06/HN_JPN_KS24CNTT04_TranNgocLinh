function getDataFromAPI1(callback){
 setTimeout(()=>{
    console.log("Lay data API 1 thanh cong");
    
    callback()
 },1000)
}
function getDataFromAPI2(callback){
 setTimeout(()=>{
    console.log("Lay data API 2 thanh cong");
    callback()
 },1000)
}
function getDataFromAPI3(callback){
 setTimeout(()=>{
    console.log("Lay data API 3 thanh cong");
    console.log("TAT CA DU LIEU DA LAY THANH CONG");
 },1000)
}

function runAllTask(){
    getDataFromAPI1(()=>{
        getDataFromAPI2(()=>{
            getDataFromAPI3()
        })
    })
}   
runAllTask()