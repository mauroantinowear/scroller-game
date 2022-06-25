const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let gameSpeed = 5;

const backgroundLayer1 = new Image();
backgroundLayer1.src = './background/city/layer-1.png';
const backgroundLayer2 = new Image();
backgroundLayer1.src = './background/city/layer-2.png';
const backgroundLayer3 = new Image();
backgroundLayer1.src = './background/city/layer-3.png';
const backgroundLayer4 = new Image();
backgroundLayer1.src = './background/city/layer-4.png';
const backgroundLayer5 = new Image();
backgroundLayer1.src = './background/city/layer-5.png';

class layer {
    constructor(image, speedModifier) {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.x2 = 0;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }
    update() {
        this.speed = gameSpeed * this.speedModifier;
        if (this.x <= -this.width) {
            this.x = this.width + this.x - this.speed;
        }
    }
    draw() {}
}

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    requestAnimationFrame(animate);
}
animate();