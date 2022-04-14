# Object Copying - Exercise 1
In questo esercizio sono stati creati due oggeti: `person1` e `person2`. All'oggetto `person2` è stato assegnato l'oggetto `person1`. Si desidera che venga modificata la proprietà `firstName` dell'oggetto `person2` in "Simon".

Sai spiegare il perché modificando l'oggetto `person2` viene modificato anche l'oggetto `person1`?



perchè a differenza delle variabili che hanno la possibilità di copiare il loro valore in modo indipendente (a==>a), ovvero una volta modificata una variabile (a) le modifiche saranno circoscritte a quella variabile.

gli oggetti invece non sono indipendenti,dunque se copi un oggetto e modifichi la copia,la modifica intacchera anche l'originale avendo come riferimento la stessa locazione di memoria