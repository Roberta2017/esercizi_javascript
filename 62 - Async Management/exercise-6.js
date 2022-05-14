const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(item => item.id === id);

      if (person) {
        return resolve(JSON.stringify(person));
      }

      return reject(`Person with id: ${id} doesn't exist`);
    }, 1000);
  });
}

async function asyncFetchPersonById(id){
  try{
  let people = await fetchPersonById(id)
  let people2 = await JSON.parse(people)
  console.log(people2)


}catch (error){
  
  console.log(error);
}



}
asyncFetchPersonById(5)
asyncFetchPersonById(4)
asyncFetchPersonById(3)
asyncFetchPersonById(2)
asyncFetchPersonById(1)




/*  fetchPersonById(2)
  .then((personJson) => JSON.parse(personJson))
  .then((person) => console.log(person))
  .catch((err) => console.error(err)); */