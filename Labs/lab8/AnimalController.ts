import Animal from "./Animal";
import CompareSpeed from "./CompareSpeed";
import Dog from "./Dog";
import Horse from "./Horse";
import Tiger from "./Tiger";

//Construct data
let dog = new Dog("Dog", Math.floor(Math.random() * 60) + 1);
let tiger = new Tiger("Tiger", Math.floor(Math.random() * 100) + 1);
let horse = new Horse("Horse", Math.floor(Math.random() * 75) + 1);

// Construct controller
let compareSpeed = new CompareSpeed();
let fastestAnimal = compareSpeed.findFastestAnimal([dog, tiger, horse]);

console.log(`Dog's speed ${dog.getSpeed()}`);
console.log(`Tiger's speed ${tiger.getSpeed()}`);
console.log(`Horse's speed ${horse.getSpeed()}`);
console.log(`Winner is ${fastestAnimal.getName()}, with speed: ${fastestAnimal.getSpeed()}`);

