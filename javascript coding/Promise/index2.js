let promise = new Promise (function(resolve, reject) {
  let workdone = false;
  setTimeout(() => {
    if(workdone) {
      resolve("fullfiled")
    }else {
      reject("error")
    }
  },2000)

})
promise.then(function(successMessage){
  console.log("suceess:", successMessage);
  return new Promise((resolve)=> {
    setTimeout(()=> {
      resolve("data")
    },2000)
  })
  
})
.then(function(data1)  {
  console.log("daya:", data1);
  return new Promise((resolve) => {
    setTimeout(()=> {
      resolve("data 1compleye")
    })
  })
  
})
.then(function(data2) {
  console.log("data2:", data2);
  return new Promise((resolve) =>{
    setTimeout(() => {
      resolve("data2complete")
    })
  })
  
})
.then(function(finalMessage){
  console.log("fina:", finalMessage);
  
})
.catch(function(errMessage) {
  console.log("err:", errMessage);
  
})