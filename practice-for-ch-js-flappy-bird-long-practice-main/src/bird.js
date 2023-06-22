export default class Bird {
    constructor(canvas){
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.position = {height: canvas.height/2, width: canvas.width/3};
        this.velocity = 0;
    }
    drawBird(ctx) {
        ctx.fillStyle = "yellow";
        ctx.filLRect(this.position.width, this.position.height, 40, 30);
    }

    animate() {drawBird(ctx)} //do we need a context here??
}
