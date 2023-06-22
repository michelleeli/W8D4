Function.prototype.inherits = function(Parent){
    // function Surrogate() {};
    // Surrogate.prototype = Parent.prototype;
    // this.prototype = new Surrogate();
    // this.prototype.constructor = this;
    this.prototype = Object.create(Parent.prototype);
    this.prototype.constructor = this;
}

// function inherit(Child,Parent) {
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
// }

function MovingObject () {};

function Ship (name) {
    this.name = name
}
Ship.inherits(MovingObject);

function Asteroid (name) {
    this.name = name
}
Asteroid.inherits(MovingObject);

MovingObject.prototype.move = function() {
    console.log(`I\'m a moving ${this.name}`)
};

Ship.prototype.sail = function() {
    console.log('I\'m sailing');
};

Asteroid.prototype.collide = function() {
    console.log('f this ship')
};


ship = new Ship('shippy');
asteroid = new Asteroid('meteor');

ship.sail();
// ship.collide();
// asteroid.sail();
asteroid.collide();
ship.move();
asteroid.move();