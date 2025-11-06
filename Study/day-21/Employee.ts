// user-defined data
// Focus into properties: salary
export default class Employee {

    protected name: string = 'Employee';
    protected salary: number; //private, protected, public
    protected bonus: number;
    protected workingDays;
    // không có init giá trị thì p có constructor
    constructor(salary: number, workingDays: number) {
        this.salary = salary;
        this.bonus = 0;
        this.workingDays = workingDays;
    }

    public getSalary() {
        return this.salary;
    }

    public getName() {
        return this.name;
    }

    public getBonus() {
        return this.bonus;
    }

    protected setBonus(bonus: number) {
        this.bonus = bonus;
    }

    public setWorkingDays(workingDays: number) {
        this.workingDays = workingDays;
    }

    public getWorkingDays(workingDays: number) {
        return this.workingDays;
    }
}
