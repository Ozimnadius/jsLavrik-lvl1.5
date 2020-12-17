window.onload = function (e) {

    var a1 = new Dog('Bobik', 20, 10);
    var a2 = new Cat('Murzik', 1, 1);

    a1.log();
    a2.eat();
    a2.log();
    console.log(a2);
}

function Animal(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.weight = 1;
}

Animal.prototype.eat = function () {
    this.weight++;
}

Animal.prototype.log = function () {
    console.log(this.name + ' ' + this.weight + ' ' + this.x + ' ' + this.y);
}

Cat.prototype = new Animal();

function Cat(name, x, y){
    Animal.call(this, name, x, y);
    this.lifes = 9;
}

Dog.prototype = new Animal();

function Dog(name, x, y){
    Animal.call(this, name, x, y);
}