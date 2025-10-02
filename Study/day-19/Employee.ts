// user-defined data
// Focus into properties: salary
export default class Employee {

    protected salary: number; //private, protected, public
    protected name: string = 'Employee';
    constructor(salary: number) // không có init giá trị thì p có constructor
    {
        this.salary = salary;
    }

    public getSalary() {
        return this.salary;
    }

    public getName() {
        return this.name;
    }

}