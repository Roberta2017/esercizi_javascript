 

const sum = (a,b) => a+b;



const subtract =(a, b) => a - b;

const multiply = (a, b) => a * b;

const divide =  (a, b) => a / b;



const log = (tot)=> console.log(tot);

log(divide((subtract(multiply(sum(2,4),sum(5,2)),2)),5));

/*sum(2,4)
sum(5,2)
subtract(multiply(),2)
divide(subtract(),5)
multiply(sum(),sum())
log(divide());
*/

