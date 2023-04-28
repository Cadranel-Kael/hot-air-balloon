import {Rectangle} from "../framwork-2023/shapes/Rectangle";
import {IRectangle} from "../framwork-2023/Types/IRectangle";
import {Canvas} from "../framwork-2023/Canvas";
import {Hsl} from "../framwork-2023/Colors/Hsl";
import {Rgb} from "../framwork-2023/Colors/Rgb";
import {Animatable} from "../framwork-2023/Types/Animatable";
import {settings} from "../settings";
import {Shape} from "../framwork-2023/shapes/Shape";

export class Sky extends Shape {
    private readonly gradient: CanvasGradient;

    constructor(canvas: Canvas) {
        super({
            canvas: canvas,
            position: {x:0, y:0},
            color: settings.sky.gradient[0],
            direction: 2*Math.PI,
            speed: 0,
        });

        this.gradient = this.canvas.ctx.createLinearGradient(this.canvas.width/2, 0, this.canvas.width/2, this.canvas.height);

        settings.sky.gradient.forEach((value, index) => {
            this.gradient.addColorStop(index/settings.sky.gradient.length, value.toString());
        })

        window.addEventListener('resize', () => {
            this.draw();
        })
    }

    draw() {
        this.canvas.ctx.fillStyle = this.gradient;
        this.canvas.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
