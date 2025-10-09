import Animal from "./Animal";
import CompareSpeed from "./RacingController";
import Dog from "./Dog";
import Horse from "./Horse";
import Tiger from "./Tiger";

//Construct data
let dog = new Dog();
let tiger = new Tiger();
let horse = new Horse();

// Construct controller
let compareSpeed = new CompareSpeed();
let fastestAnimal = compareSpeed.getWinner([dog, tiger, horse]);

console.log(`Dog's speed ${dog.getSpeed()}`);
console.log(`Tiger's speed ${tiger.getSpeed()}`);
console.log(`Horse's speed ${horse.getSpeed()}`);
console.log(`Winner is ${fastestAnimal.getName()}, with speed: ${fastestAnimal.getSpeed()}`);

