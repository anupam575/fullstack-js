function isArmstrong(num) {
  let sum = 0;
  let temp = num;

  while (temp > 0) {
    let digit = temp % 10;
    sum += digit * digit * digit;
    temp = Math.floor(temp / 10);
  }

  return sum === num;
}

console.log("Armstrong numbers under 1000 are:");
for (let i = 1; i < 1000; i++) {
  if (isArmstrong(i)) {
    console.log(i);
  }
}
