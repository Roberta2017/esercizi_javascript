const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

for(element in person){
 if (typeof (person[element])==='stringa'){

  person[element] = undefined;
}
}



const json = JSON.stringify(person);

console.log(json); // Should return: { id: 1, age: 25 }
 
/* dal momento in cui Mario e Rossi sono stringhe,
scarto le stringhe dall'analisi, sapendo che json
non considera gli undefined */