const arr = [344, 5,6,56,7]
let largest = arr[0]
let second = -Infinity
let third = - Infinity
for(let i = 0; i < arr.length; i++) {
  if(arr[i] > largest) {
    third = second
    second = largest;
    largest = (arr[i])
  }else if (arr[i] > second && arr[i] !== largest){
    second = arr[i]
  } else if(arr[i] > third && arr[i] !== largest && arr[i] !== second){
    third = arr[i]
  }
}
console.log("first largest number:", (largest));
console.log("first largest number:", (second));
console.log("first largest number:", (third));
