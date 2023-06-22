import Level from './level.js';
import Bird from './bird.js';

export default class FlappyBird {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.level = new Level(this.dimensions);
  }

  animate() {
    this.level.drawBackground(this.ctx)
  }

  restart() {
    this.animate();
    const newBird = new Bird(canvas);
    newBird.animate();
    // this.animate(this.ctx);
  }
}

