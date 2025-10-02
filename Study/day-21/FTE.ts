import Employee from "./Employee";

// Extends: IS-A Relationship | Family relationship
// Extends: Inheritance -> Design Concept (Hướng ĐT) + Reuse concept (Hướng hàm)
export default class FTE extends Employee {
    constructor(salary: number,workingDays: number) {
        super(salary, workingDays);
        this.name = 'FTE';
        //this.setBonus(1000);
    }


}


/**
 * 
 * GET POST PUT PATCH DELETE -> Reuse
 * BaseRequesthandler | FP
 * GetRequestHandler extends BaseRequestHandler
 */