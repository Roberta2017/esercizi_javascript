const person = {


Name: "",
Cognome: "",

get firstName(){
  return this.Name = value;
},

set firstName(name){
  this.Name =  name;
},

get lastName(){
  return this.Cognome;
},

set lastName(cognome){
  this.Cognome = cognome;
},

fullName(){
  return (`${this.Name}  ${this.Cognome}`);
}
};

const john = Object.create(person);
const simon = Object.create(person);




john.firstName ='john';
john.lastName = 'doe';

simon.firstName ='simon';
simon.lastName = 'collins';




console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins