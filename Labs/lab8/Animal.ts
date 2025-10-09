export default class Animal {
    protected animalName: string;
    protected speed: number;

    constructor(animalName: string, speed: number) {
        this.animalName = animalName;
        this.speed = speed;
    }

    protected setName(animalName: string) {
        this.animalName = animalName;
    }

    protected setSpeed(speed: number) {
        this.speed = speed;
    }

    public getName() {
        return this.animalName;
    }

    public getSpeed() {
        return this.speed;
    }

    protected generateRandomSpeed(){
        
    }
}