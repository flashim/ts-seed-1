import {Animal} from "./main";

class Dog extends Animal {
    constructor(name : string) {
        super(name);
        Dog.animalsCreated++;
    }
}

export default Dog;