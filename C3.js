class ElectricalAppliance {
    constructor(name, power){
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }
    plugIn(){
        console.log(this.name + "is plugged");
        this.isPlugged = true; 
    }
    unplug(){
        console.log(this.name + "is unplugged");
        this.isPlugged = false;
    }
}

class Computer extends ElectricalAppliance{
    constructor(name, brand, power, type) {
        super(name, power);
        this.brand = brand;
        this.type = type;
        this.isPlugged = true;
    }
}

class Teapot extends ElectricalAppliance{
    constructor(name, brand, power, volume) {
        super(name, power);
        this.brand = brand;
        this.volume = volume;
        this.isPlugged = true;
    }
}

class SmartWatch extends ElectricalAppliance{
    constructor(name, brand, power, OS, generation) {
        super(name, power);
        this.brand = brand;
        this.OS = OS;
        this.generation = generation;
        this.isPlugged = true;
    }
}

const PC = new Computer("Table PC", "ASUS", 180, "working");

const appleWatch = new SmartWatch("Apple Watch", "Apple", 5, "IOS", 3);

const HotWatterPot = new Teapot("Scarlet Teapot", "Scarlet", 55, 7);

PC.plugIn();

appleWatch.plugIn();

HotWatterPot.unplug();

console.log(PC);
console.log(appleWatch);
console.log(HotWatterPot);