import FTE from "./FTE";
import SalaryController from "./SalaryController";
import Contractor from "./Contractor";


//Construct data
const teo = new FTE ("Teo", 50000, 250);
console.log(`Teo's bonus: ${teo.getBonus()}`);
console.log(`Teo's salary: ${teo.getSalary()}`);

const ti = new FTE ("Ti", 50000, 200);
console.log(`Ti's bonus: ${ti.getBonus()}`);

const bom = new FTE ("Bom", 50000, 300);
console.log(`Bom's bonus: ${bom.getBonus()}`);

const tom = new Contractor("Tom", 40000, 150);
console.log(`Tom's bonus: ${tom.getBonus()}`);

const tep = new Contractor("Tep", 40000, 120);
console.log(`Tep's bonus: ${tep.getBonus()}`);


//Construct controller
const salaryController = new SalaryController();

//Use controller to process data -> output
const totalSalary=salaryController.getTotalSalary([teo,ti,bom,tom,tep]);
console.log(`Total salary: ${totalSalary}`);

const sortNameASC= salaryController.sortByName([teo,ti,bom,tom,tep],"ASC");
console.log(`Employee list sorted by Name alphabetically ${JSON.stringify(sortNameASC, null,2)}`);

const sortSalaryDESC= salaryController.sortBySalary([teo,ti,bom,tom,tep],"DESC");
console.log(`Employee list salary rank ${JSON.stringify(sortSalaryDESC,null,2)}`);

