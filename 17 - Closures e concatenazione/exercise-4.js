function calculate() {
 let results=0;

  return /*oggetto*/{
    add(num){
      results = num + results;
      return this
    },
multiply(num){
  results = num * results;
  return this

},

sub(num){
  results = results - num ;
  return this
},

divide(num){
  results = results / num;
  return this
},


printResult(){
console.log(results)

}
  }



}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7