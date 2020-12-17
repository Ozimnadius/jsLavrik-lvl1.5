window.onload = function (e) {

    let animals = [];
    animals.push(new Dog('Bobik', 20, 10));
    animals.push(new Cat('Murzik', 1, 1));
    animals.push(new Dog('Bobik2', 5, 32));
    animals.push(new Cat('Murzik2', 23, 10));

    for (let animal of animals) {
        animal.eat();
        console.log(animal.log());
    }

}

class Animal {
    constructor(name, x, y) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.weight = 1;
    }

    eat() {
        this.weight++;
    }

    log() {
        return this.name + ' ' + this.weight + ' ' + this.x + ' ' + this.y;
    }
}

class Cat extends Animal {
    constructor(name, x, y) {
        super(name, x, y);
        this.lifes = 9;
    }

    log() {
        var tmp = super.log();
        return tmp + ' ' + this.lifes;
    }

    run() {
        this.weight--;
    }
}

class Dog extends Animal {
    eat() {
        this.weight += 2;
    }
    
    _some(){
        conlose.log(1);
    }
}