function sum(...num) {
  return num.reduce((total,value)=>total+value);
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));