class Person {
constructor (name, age){
    this._name=name;
    this._age=age;
}
//Getters: is a function that return the CURRENT VALUE of a property
//getName(){
get name (){ 
    return this._name;
}
// Setters: reassign a peroperty's value
//setName(name){
set name(name){
    this._name= name;
}

}
module.exports=Person;

//
let teo= new Person ("Teo",19);

//Encapsulation Violation
console.log(teo._name);
teo._name = "Teo Doi Ten";
console.log(teo._name);

// No violation
//teo.setName("Teo Doi Ten")

console.log(teo.name);
teo.name="Teo Doi Ten";

