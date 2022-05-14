const persons = [{
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

const jobs = [{
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

// core here



function fetchPersonById(id) {
  return new Promise((resolve, reject) => {

    const person = persons.find(person => person.id === id);

    if (person) {
      return resolve(JSON.stringify(person));
    }

    return reject((`Person with id: ${id} doesn't exist`));
  })

}




function fetchJobById(id) {
  return new Promise((resolve, reject) => {

    const job = jobs.find(element => element.id === id);

    if (job) {
      return resolve(JSON.stringify(job));
    }

    return reject((`Person with id: ${id} doesn't exist`));
  })

}



Promise.all([
    fetchJobById(1),
    fetchPersonById(2)
  ])
  .then((person) => {

    console.log(person)
  })
  .catch((param) => console.log(param))