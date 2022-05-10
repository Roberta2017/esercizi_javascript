class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const developer = new Person(1, 'Mario', 'Rossi', 25);
let jsondevelop =JSON.stringify(developer)
/* console.log(typeof jsondevelop); */
console.log(jsondevelop)
// Print developer as json object