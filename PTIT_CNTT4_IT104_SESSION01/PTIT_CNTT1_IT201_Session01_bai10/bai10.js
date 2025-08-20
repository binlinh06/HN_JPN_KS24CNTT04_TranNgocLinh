function filter(arr){
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i].split("").sort().join("")
    if(!obj[word]){
      obj[word] = [];
    }
    obj[word].push(arr[i]);
  }
  console.log("result",Object.values(obj));
}
filter(["eat", "tea", "tan", "ate", "nat", "bat","tab"]);