// user-defined data
// Focus into properties: salary
export default class Employee {

    protected name: string = 'Employee';
    protected salary: number; //private, protected, public
    protected bonus: number = 0;
    protected workingDays: number = 0;
    constructor(salary: number) { // không có init giá trị thì p có constructor
        this.salary = salary;
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
