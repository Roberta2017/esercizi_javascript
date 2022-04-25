class Person {                                /*<== classe padre con costruttore */
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Developer extends Person {                  /*<== classe developer,classe figlia.Eredita i parametri presenti nel padre */

  constructor(firstName,lastName,role) {            /*<== inseriamo i parametri esistenti gia nel padre e scriviamo anche il parametro che vogliamo aggiungere */
    super(lastName,firstName);                       /*<== col super richiami i parametri del genitore*/
    this.role = role;                               /* dopo di che definisco con la chiave this il nuovo parametro*/
  }
}


const developer = new Developer('Mario', 'Rossi', 'Front-end');
console.log(`${developer.firstName} ${developer.lastName} - ${developer.role}`);