import BankAccount from "./BankAccount";

export default class SavingAccount extends BankAccount {
    constructor() {
        super();
        this.minimunBalance = 50;
    }


    deposit(amount: number): void {
        this.balance = this.balance + amount;
    }

     withdraw(amount: number): void {
        const errMsg=`Insufficient balance`;
        this._withdraw(amount,errMsg);

    }


}

/**
 * parent: protected
 * child: protected, public => ko dc private
 */