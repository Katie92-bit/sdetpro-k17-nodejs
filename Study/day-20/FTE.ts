import Employee from "./Employee";

// Extends: IS-A Relationship | Family relationship
// Extends: Inheritance -> Design Concept (Hướng ĐT) + Reuse concept (Hướng hàm)
export default class FTE extends Employee {
    constructor(salary: number) {
        super(salary);
        this.name = 'FTE';
        //this.setBonus(1000);
    }

    //Overriding: Khi pthuc lop con = cua lop cha, k can tư khoa override ben duoi cung dc
    public override setBonus(factor: number) {
        this.bonus = factor * this.workingDays / (365 - 52);


    }
}

/**
 * 
 * GET POST PUT PATCH DELETE -> Reuse
 * BaseRequesthandler | FP
 * GetRequestHandler extends BaseRequestHandler
 */