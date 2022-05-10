function sum(...num1) {
return num1.reduce((total,value) => total + value, 0)
}

console.log(sum(1, 2, 3, 4, 5,3,4,5,6,7,8,6,5,4,4));