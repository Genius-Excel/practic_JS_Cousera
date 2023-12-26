class Animal{
    constructor(colour, energy){
        this.colour = colour;
        this.energy = energy;
    }

    is_active(){
        if (this.energy > 0){
            this.energy -= 20;
            console.log(this.energy);
        }
        else if (this.energy <= 0){
          //  this.sleep();
          this.sleep();
        }
    }

    sleep(){
        this.energy += 20;
        console.log(this.energy);
    }

    get_colour(){
        console.log(this.colour);
    }
}


class Cat extends Animal{
    constructor(sound, can_jump_high, can_climb_trees, colour, energy){
        super(colour, energy);
        this.sound = sound;
        this.can_jump_high = can_jump_high;
        this.can_climb_trees = can_climb_trees;

    }

    // This method prints the Animal sound.
    make_sound(){
        console.log(this.sound);
    }
}


class Bird extends Animal{
    constructor(sound, can_fly, energy, colour){
        super(colour, energy);
        this.sound = sound;
        this.can_fly = can_fly;
    }

    // This method prints the Animal sound.
    make_sound(){
        console.log(this.sound);
    }
}


class HouseCat extends Cat{
    constructor(housecat_sound, sound, can_jump_high, can_climb_trees, colour, energy){
        super(sound, can_jump_high, can_climb_trees, colour, energy);
        this.housecat_sound = housecat_sound;
    }

    // This method prints the sound of the Animal.
    make_sound(option){
        if (option){
            super.make_sound();
        }

        console.log(this.housecat_sound);
    }
}


class Tiger extends Cat{
    constructor(tiger_sound, sound, can_jump_high, can_climb_trees, colour, energy){
        super(sound, can_jump_high, can_climb_trees, colour, energy);
        this.tiger_sound = tiger_sound;
    }

    make_sound(option){
        if (option){
            super.make_sound();
        }

        console.log(this.tiger_sound);
    }
}


class Parrot extends Bird{
    constructor(can_talk, sound, can_jump_high, can_climb_trees, colour, energy){
        super(sound, can_jump_high, energy, colour);
        this.can_talk = can_talk;
        this.can_climb_trees = can_climb_trees;

    }

    make_sound(option){
        if (option){
            super.make_sound();
        }

        if (this.can_talk){
            console.log("Talking");
        }
    }
}


var par = new Parrot(true, "Quackinn", true, true, "Red", 50);

par.is_active();
par.sleep();
par.make_sound();