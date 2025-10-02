import Employee from "./Employee";

// Extends: IS-A Relationship | Family relationship
// Extends: Inheritance -> Design Concept (Hướng ĐT) + Reuse concept (Hướng hàm)
export default class FTE extends Employee {
constructor (salary:number){
    super(salary);
    this.name='FTE';
}

}

/**
 * 
 * GET POST PUT PATCH DELETE -> Reuse
 * BaseRequesthandler | FP
 * GetRequestHandler extends BaseRequestHandler
 */