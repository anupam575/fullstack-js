let promise = new Promise (function(resolve, reject) {
  let workdone = true;
  setTimeout(() => {
    if(workdone) {
      resolve("fullfilled")
    }else {
      reject("error")
    }
  }, 2000)
})
promise.then(function(successMessage){
  console.log("sucees:", successMessage);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("sucees complete")
    }, 2000)
  })
  
})
.then(function(data) {
  console.log("data:", data);
  return new Promise((resolve) => {
    setTimeout(() => {
          resolve("daya complet")


    },2000)
  })
  
})
.then(function(data1) {
  console.log("data1:", data1);
  return new Promise((resolve)=> {
    setTimeout(()=> {
      resolve("data1 complet")
    },2000)
  })
  
})
.then(function(data2) {
  console.log("data2:", data2);
  
})
.catch(function(erroro){
  console.log("eer:",erroro);
  
})
console.log("pending");
