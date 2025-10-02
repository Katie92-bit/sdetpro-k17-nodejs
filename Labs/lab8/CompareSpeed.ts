import Animal from "./Animal";

export default class CompareSpeed {

    public findFastestAnimal(animalList: Animal[]): Animal {
        if (animalList.length === 0) {
            throw new Error("Animal list is empty!");
        }

        let fastestAnimal: Animal = animalList[0]!;

        for (const animal of animalList) {
            if (animal.getSpeed() > fastestAnimal.getSpeed()) {
                fastestAnimal = animal;
            }
        }

        return fastestAnimal;
    }
}
