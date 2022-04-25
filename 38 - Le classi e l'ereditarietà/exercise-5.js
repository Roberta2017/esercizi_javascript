class BankAccount {
  #amount = 0;                                                       /*il cancelletto indica un valore privato da cui non si puo accede dall'esterno della funzione .*/
                                                                          /*in un valore privato puo entrare (per esempio il deposito) ma non puo uscire */
  constructor(initialAmount) {
    this.#amount = initialAmount;                                   /*con static puoi richiamare un metodo senza creare un

                                                                           oggetto. se non è static devi necessariamente inizializzare

                                                                            un oggetto con il new */
  }

  deposit(amount) {
    this.#amount += amount;
  }

  withdraw(amount) {
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }

  get value() {
    return (this.#amount)
  }

  set value(param) {
    this.#amount = param;
  }


}

class BankAccountVip extends BankAccount {
  constructor(value) {
    super(value)
  }

  deposit(amount) {
    if (this.value >= 1000) {

      amount += (amount * 3 / 100);
      this.value += amount;

    }
    else {
      this.value = amount;
    }

  }


}

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();