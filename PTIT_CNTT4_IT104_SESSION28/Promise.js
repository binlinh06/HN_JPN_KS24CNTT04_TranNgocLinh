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
      res();
    }, 2000);
  });
}

function runAllTask() {
  getDataFromAPI1()
    .then(() => getDataFromAPI2())
    .then(() => getDataFromAPI3())
    .then(() => console.log("Tat ca hoan thanh"))
    .catch((error) => {
      console.log("Loi", error);
    });
}
runAllTask();
