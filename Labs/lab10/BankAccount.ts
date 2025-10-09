export default abstract class BankAccount {

    protected balance: number = 0;
    protected minimunBalance: number = 0;

    protected abstract deposit ( amount: number): void;
    protected abstract withdraw ( amount: number): void;

    public getBalance () : number {
        return this.balance;
    }

    // Support method
    protected _withdraw(amount:number, errMsg:string){
        let tempBalance = this.balance - amount;
        if (tempBalance < this.minimunBalance) {
            throw new Error(errMsg);
        }
        this.balance = this.balance - amount;
        console.log(`[SUCCESS] Withdrawing ${amount}`);
    }
}