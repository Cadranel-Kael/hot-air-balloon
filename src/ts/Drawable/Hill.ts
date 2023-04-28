import {Shape} from "../framwork-2023/shapes/Shape";
import {Canvas} from "../framwork-2023/Canvas";
import {settings} from "../settings";
import {Hsl} from "../framwork-2023/Colors/Hsl";
import {Animatable} from "../framwork-2023/Types/Animatable";
import {Rgb} from "../framwork-2023/Colors/Rgb";
import {Position} from "../framwork-2023/Types/Position";
import {IHill} from "../Type/IHill";

export class Hill implements Animatable {
    private readonly canvas: Canvas;
    private ctx: CanvasRenderingContext2D;
    private readonly color: Hsl|Rgb;
    private readonly startPosition: number;
    private readonly amplitude: number;
    private readonly radius: number;

    constructor(hill: IHill) {
        this.canvas = hill.canvas;
        this.ctx = this.canvas.ctx;
        this.color = hill.color;
        this.startPosition = hill.startPosition;
        this.amplitude = hill.amplitude;
        this.radius = hill.radius;
    }

    draw(): void {
        this.ctx.fillStyle = `${this.color}`;
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.canvas.height);
        for (let i = 0; i < this.canvas.width; i++) {
            this.ctx.lineTo(i, (this.canvas.height - this.startPosition) - Math.sin(i * this.amplitude / this.canvas.width) * this.radius / 2);
        }
        this.ctx.lineTo(this.canvas.width, this.canvas.height);
        this.ctx.closePath();
        this.ctx.fill();
    }

    update(): void {
    }
}

// this.position.x = (Math.sin(this.direction)*this.distance + this.center.x);
// this.position.y = (Math.cos(this.direction)*this.distance + this.center.y);
//
// this.direction += this.increment;
// if (this.direction >= Math.PI * 2) {
//     this.direction -= Math.PI * 2;
// }