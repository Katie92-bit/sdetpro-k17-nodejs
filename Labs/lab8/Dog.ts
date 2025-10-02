import Animal from "./Animal";

export default class Dog extends Animal {
    constructor(animalName: string, speed: number) {
        super(animalName, speed);
    }

}