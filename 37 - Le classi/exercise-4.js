class BankAccount{
    constructor(totPresente){
        this.totale = totPresente;
    }

 deposit(totVersato){
     this.totale += totVersato;

 }

withdraw(prelievo){
    this.totale-= prelievo;

}


view(){
    console.log(this.totale);
}
}




const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();