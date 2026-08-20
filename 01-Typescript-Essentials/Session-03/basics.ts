function addNumbers(a: number, b: number = 9) {
  return a + b;
}

const result1: number = addNumbers(10, 8);
const result2: number = addNumbers(10);

console.log(result1 , result2)
