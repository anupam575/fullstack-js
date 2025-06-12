function curryAdd(a) {
  return function(b) {
    return a + b;
  };
}

const add5 = curryAdd(5);  // 5 fix हो गया
console.log(add5(3));      // 8
console.log(add5(7));      // 12
console.log(add5(9));      // 14
