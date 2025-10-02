const Person = require("./Person");

class BonusManagement {
    getEligibleMoneyAmount(person) {
        if (person.age >= 80) {
            return 500; ư
        } else {
            return 100;
        }
    }
}

let teo = new Person(); 
teo._age=-18
const money = new BonusManagement().getEligibleMoneyAmount(teo);
    console.log(`Teo is gonna receive ${money}`);
