import Level from './level.js';
import Bird from './bird.js';

export default class FlappyBird {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.level = new Level(this.dimensions);
  }

  animate() {
    // call animate on level class 
  }

  restart() {
    this.level.drawBackground(this.ctx);
    // this.bird = new Bird;
    // Game.animate(this.ctx);
  }
}

