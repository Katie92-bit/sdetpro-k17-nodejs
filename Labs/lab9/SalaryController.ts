import Employee from "./Employee";

export default class SalaryController {


    public getTotalSalary(employeeList: Employee[]): number {

        let totalSalary = 0;
        for (const emp of employeeList) {
            totalSalary = totalSalary + emp.getSalary() + emp.getBonus();
        }
        return totalSalary;
    }



public sortByName(employeeList: Employee[], rule: string){
    const copied = [...employeeList];
    if (rule === "ASC") {
        return copied.sort(function (a, b) {
            return a.getName().localeCompare(b.getName());
        })
    } else if (rule === "DESC") {
        return copied.sort(function (a, b) {
            return b.getName().localeCompare(a.getName());
        })
    }
return copied;
}


public sortBySalary(employeeList: Employee[], rule: string){
    const copied = [...employeeList];
    if (rule === "ASC") {
        return copied.sort(function (a, b) {
            return a.getSalary()- b.getSalary();
        })
    } else if (rule === "DESC") {
        return copied.sort(function (a, b) {
            return b.getSalary()-a.getSalary();
        })
    }
return copied;
}

}