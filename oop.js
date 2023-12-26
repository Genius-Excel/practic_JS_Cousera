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

//var obj = new Mammal("Land", "Vegetables");

//obj.about();

class Dog extends Mammal{
    about(){
        super.about();
    }

    comm_sound(sound){
        console.log(`While on ${this.habitat}, I make the ${sound} sound.`)
    }
}

var new_obj = new Dog("Land", "Meat");

new_obj.about();
new_obj.comm_sound("Barking");