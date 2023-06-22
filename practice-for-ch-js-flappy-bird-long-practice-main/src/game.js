export default class FlappyBird {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
  }

  animate() {
    // call animate on level class 
  }

  restart() {
    this.level = new Level(this.dimensions);
    Game.animate(this.ctx);
  }
}

