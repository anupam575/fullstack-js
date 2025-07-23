let a = 25;
// let b = 40;
// let c = 30;

// if (a >= b && a >= c) {
//   console.log(a + " is the greatest");
// } else if (b >= a && b >= c) {
//   console.log(b + " is the greatest");
// } else {
//   console.log(c + " is the greatest");
//
const arr = [23,46,41,59,66,78,88,908]
let largest = arr[0]
let second =  -Infinity
let third = -Infinity
for(let i = 0; i < arr.length; i++){
    if(arr[i] > largest) {
        third = second
        second = largest
        largest = arr[i]
    }else if(arr[i] > second && second !== largest ) {
        second = arr[i]

    }else if(arr[i] > third && third !== second && second !== largest){
        third = arr[i]
    }
}
console.log(largest);
console.log(second);
console.log(third);



