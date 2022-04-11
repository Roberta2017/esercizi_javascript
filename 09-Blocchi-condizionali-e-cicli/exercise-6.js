function getKeys(obj) {

  let dati=[];

  for(let dato in obj){
    dati.push(dato);

  }

  return dati;
}



const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);