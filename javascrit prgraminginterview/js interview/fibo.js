let n = 3;
let a = 0, b = 1;
console.log(`${n}`);
for (let i = 0; i<=n; i++) {
  console.log(a);
  let next = a+b;
  a = b;
  b = next
  
}
