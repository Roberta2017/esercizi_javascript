class BankAccount {

  #amount = 0;
  


  constructor(initialAmount) {

    this.#amount = initialAmount;
  }


  deposit(amount) {

    try {

      if (amount < 0) {
        throw new Error("il tuo amount non puo essere inferiore a 0!")

      }
      // throw an exception if amount is negative
      this.#amount += amount;
    } catch (errore) {

      console.log('message', errore.message);

    }
  }
  withdraw(amount) {
    try {
      if (amount > 0 && amount <= this.amount) {
        this.#amount -= amount;


      } else {
        throw new Error("guarda quello che stai facendo")

      }
    } catch (errore) {
      console.log('message', errore.message)
    }
    // throw an exception if amount is negative or if withdrawal amount is greater than current amount

  }

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();