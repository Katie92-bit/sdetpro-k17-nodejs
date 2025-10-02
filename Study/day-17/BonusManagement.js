class BonusManagement {
getEligibleMoneyAmount(person){
if (person.age>=80){
    return 500;
}else{
    return 100;
}

}

}

let teo =new Person ("Teo", 18);
let bonus=BonusManagement.getEligibleMoneyAmount(teo);
console.log(`Teo is gonna receive ${money}`);

