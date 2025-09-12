function getDataFromAPI1() {
  return new Promise((res, reject) => {
    setTimeout(() => {
      console.log("Lay du lieu API1 tai len du lieu thanh cong");
      res();
    }, 2000);
  });
}
function getDataFromAPI2() {
  return new Promise((res, reject) => {
    setTimeout(() => {
      console.log("Lay du lieu API2 tai len du lieu thanh cong");
      res();
    }, 2000);
  });
}
function getDataFromAPI3() {
  return new Promise((res, reject) => {
    setTimeout(() => {
      console.log("Lay du lieu API3 tai len du lieu thanh cong");
      console.log("Lay du lieu thanh cong");
      
      res();
    }, 2000);
  });
}

async function runAllTask() {
    try {
        await getDataFromAPI1()
        await getDataFromAPI2()
        await getDataFromAPI3()
    } catch (error) {
        console.log("error",error);
        
    }
}
runAllTask();
