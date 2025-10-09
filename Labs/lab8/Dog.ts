import Animal from "./Animal";
import { MAX_SPEED } from "./SpeedConstants";

export default class Dog extends Animal {
    constructor() {
        super("Milu", Math.floor(Math.random() * MAX_SPEED.dog) + 1);
    }

}