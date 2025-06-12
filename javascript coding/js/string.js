// const arr = ['one', 'two', 'three'];
// const str = 'Hello';

// const res = arr.includes('on');
// const anotherVar = arr.includes('onetwo');
// const newVar = str.includes('li');

// console.log(res);         // false
// console.log(anotherVar);  // false
// console.log(newVar);      // true


const arr = [[1, 2], [3, 4], [5, 6]];

function flattenTheArray(val) {
  let res = []; // yeh final result array hai

  for (let i = 0; i < val.length; i++) {
    if (Array.isArray(val[i])) {
      // agar val[i] bhi array hai to usko recursively flatten karo
      const flatInner = flattenTheArray(val[i]);
      for (let j = 0; j < flatInner.length; j++) {
        res.push(flatInner[j]); // manually push each element
      }
    } else {
      res.push(val[i]); // agar array nahi hai to direct push karo
    }
  }

  return res;
}

const finalResult = flattenTheArray(arr);
console.log(finalResult); // Output: [1, 2, 3, 4, 5, 6]
