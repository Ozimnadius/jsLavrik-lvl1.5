window.onload = function (e) {

    var a1 = new Dog('Bobik', 20, 10);
    var a2 = new Cat('Murzik', 1, 1);

    a1.log();
    a2.eat();
    a2.log();
    console.log(a2);
}

class Animal{
    constructor(name, x, y){
        this.name = name;
        this.x = x;
        this.y = y;
        this.weight = 1;
    }
    
    eat(){
        this.weight++;
    }
    
    log(){
        console.log(this.name + ' ' + this.weight + ' ' + this.x + ' ' + this.y);
    }
}

class Cat extends Animal{
    constructor(name, x, y){
        super(name, x, y);
        this.lifes = 9;
    }
}

class Dog extends Animal{
    
}