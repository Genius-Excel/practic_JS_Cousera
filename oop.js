// This file contains implementation of Object Oriented Programming

class Mammal{
    constructor(habitat, feed){
        this.habitat = habitat;
        this.feed = feed;
    };

    about(){
        console.log(`This is the ${this.habitat} where I live.`);
    }

};

var obj = new Mammal("Land", "Vegetables");

obj.about();