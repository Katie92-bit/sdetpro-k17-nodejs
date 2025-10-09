import Employee from "./Employee";

export default class Contractor extends Employee {
    protected setBonus(): void {
        this.bonus = 0;
    }

    public getSalary(): number {
        return this.salary;
    }

    public getBonus(): number {
        this.setBonus();
        return this.bonus;
    }

}

