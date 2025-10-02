class Person {
constructor (name, age){
    if (age <=0){
        throw new Error ('Age can\'t be less than zero');
    }
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
get age (){ 
    return this._age;
}
// Setters: reassign a peroperty's value
//setName(name){
set age(age){
    this._age= age;
}

}
module.exports=Person;