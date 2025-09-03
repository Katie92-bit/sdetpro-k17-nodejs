const Employee = require("./Employee");
const SalaryController = require("./SalaryController");
//Construct Data
const teo = new Employee(20000);
const ti = new Employee(19000);

//Construct controller
const salaryController = new SalaryController();

//Use controller to process data -> output
const totalSalary = salaryController.getTotalSalary([teo, ti]);
console.log(`Total salary: ${totalSalary}`);
