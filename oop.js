// This file contains implementation of Object Oriented Programming

class Mammal{
    constructor(habitat, feed){
        this.habitat = habitat;
        this.feed = feed;
    };

    about(){
        console.log(`I am a Mammal and I live on ${this.habitat}`);
        console.log(`I feed on ${this.feed}`);
    }

    
};

var obj = new Mammal("Land", "Vegetables");

obj.about();