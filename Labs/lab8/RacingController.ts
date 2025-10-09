import Animal from "./Animal";

export default class RacingController {
public play (animalList: Animal[]){
// Announce list of racers

// Get the winner
const winner: Animal= this.getWinner(animalLists);

// Announce the winner name
this.announceWinner (winner);

}

//Support method
    public getWinner(animalList: Animal[]): Animal {
        if (animalList.length === 0) {
            throw new Error("Animal list is empty!");
        }

        let winner: Animal = animalList[0]!;
        for (const animal of animalList) {
            if (animal.getSpeed() > winner.getSpeed()) {
                winner = animal;
            }
        }
        return winner;
    }
}

//Support method
private announceWinner (winner: Animal){

}

/**
 * 1: 10
 * 2: 10 --> winners []
 * 3: 11 --> reset the winners [] --> add the only number 3
 */