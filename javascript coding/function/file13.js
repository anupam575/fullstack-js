function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const twice = multiplier(2);
console.log(twice(5));  // Output: 10
