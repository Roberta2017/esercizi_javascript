class Person {
  constructor(firstName,lastName,age){
  this.FirstName = firstName;
  this.LastName = lastName;
  this.Age = age;
}

get firstName() {
  return this.FirstName;

}
set firstName(value) {
   this.FirstName=value

}

get lastName() {
  return this.LastName;

}
set lastName(value) {
   this.LastName=value

}

get age() {
  return this.Age;

}
set age(value) {
   this.Age=value

}

get fullName() {

  return (`${this.FirstName}  ${this.LastName}`);
}


}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);
person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);