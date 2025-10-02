export default class Animal {
    protected animalName: string;
    protected speed: number;

    constructor(animalName: string, speed: number) {
        this.animalName = animalName;
        this.speed = speed;

    }

    public setName(animalName: string) {
        this.animalName = animalName;
    }

    public setSpeed(speed: number) {
        this.speed = speed;
    }

    public getName() {
        return this.animalName;
    }

    public getSpeed() {
        return this.speed;
    }

}