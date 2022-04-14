const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  address: {
    state: 'Italy',
    region: 'Lazio',
    city: 'Rome'
  }
};

// Argh! Nonostante abbia utilizzato Object.assign(), modificando la proprietà "address",
// viene modificato il riferimento all'oggetto person1
const person2 = JSON.parse(JSON.stringify(person1));

person2.address.region = 'Villaperuccio';
person2.address.city = 'Bidda';

console.log(person1);
console.log(person2);