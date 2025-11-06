import Employee from "./Employee";
import FTE from "./FTE";
import PartimeEmployee from "./PartimeEmployee";
import SalaryController from "./SalaryController";


//Construct data
//const MAX_BONUS=1000;
const teo = new FTE (20000, 250);
console.log(`Teo's bonus: ${teo.getBonus()}`);

const ti = new PartimeEmployee (19000, 200);
console.log(`Ti's bonus: ${ti.getBonus()}`);


//Construct controller
const salaryController = new SalaryController();

//Use controller to process data -> output
const totalSalary=salaryController.getTotalSalary([teo,ti]);
console.log(`Total salary: ${totalSalary}`);

