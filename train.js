// Object Oriented Programming in JavaScript.

class Train{
    constructor(colour, lights_on){
        this.colour = colour;
        this.lights_on = lights_on;
    }
    
    // This method toggles the light.
    toggle_light(){
        this.lights_on = !this.lights_on;
    }

    light_status(){
        console.log(`Lights on?`, this.lights_on);
    }

    get_self(){
        console.log(this);
    }

    get_prototype(){
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

var my_first_trian = new Train("red", true);

// my_first_trian.toggle_light();
// my_first_trian.get_self();
// my_first_trian.light_status();
// my_first_trian.get_prototype();

class HighSpeedTrain extends Train{
    constructor(passengers, highspeed_on, colour, lights_on){
        this.passengers = passengers;
        this.highspeed_on = highspeed_on;
        super(colour, lights_on);
    }

}