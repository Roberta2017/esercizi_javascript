function isAdult(age) {
  return age >= 18;
}



const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};
let{age}=person;
console.log(isAdult(age));

//dal momento in cui mi interessa solo sapere se age è >=18,cambio il paramtetro della funzione e destrutturo estraendo solo l'elemento che mi interessa analizzare,ovvero age.