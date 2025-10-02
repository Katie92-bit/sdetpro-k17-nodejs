import Employee from "./Employee";
import FTE from "./FTE";
import PartimeEmployee from "./PartimeEmployee";
import SalaryController from "./SalaryController";

//Construct data
const teo = new FTE (20000);
console.log(teo.getName);

const ti = new PartimeEmployee (19000);
console.log(ti.getName);


//Construct controller
const salaryController = new SalaryController();

//Use controller to process data -> output
const totalSalary=salaryController.getTotalSalary([teo,ti]);
console.log(`Total salary: ${totalSalary}`);

