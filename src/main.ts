import {Dog} from "./Dog"

function greet(name : String) {
    return "Hello " + name;
}

var user = "Ashim3";
//console.log(greet(user));

const el = document.querySelector("#root");
//console.log(el);
(el as HTMLElement).innerHTML = greet(user);

class Animal {
    public food : string = "Animal food";

    static animalsCreated : number = 0;

    constructor(private name : string) {
        Animal.animalsCreated++;
    }

    eatFood() {
        document.write("Animal eating " + this.food);
    }
}

var bolt = new Dog("bolt");
