import {Position} from "../Types/position";
import {Hsl} from "../Colors/Hsl";
import {Rgb} from "../Colors/Rgb";
import {Canvas} from "../Canvas";
import {IShape} from "../Types/IShape";
import {Hsla} from "../Colors/Hsla";
import {Rgba} from "../Colors/Rgba";

export abstract class Shape {
    protected ctx: CanvasRenderingContext2D;
    protected position: Position;
    protected speed: number;
    protected direction: number;
    color: Hsl | Rgb | Hsla | Rgba;
    protected canvas: Canvas;

    constructor(shape: IShape) {
        if (shape.canvas === undefined) {
            throw EvalError("The canvas must be defined");
        }
        this.canvas = shape.canvas;
        this.ctx = this.canvas.ctx;
        this.position = shape.position.y && shape.position.x ? shape.position : {x: 0, y: 0};
        this.color = shape.color as Rgb !== undefined || shape.color as Hsl !== undefined ? shape.color : new Rgb(250, 0, 0);
        this.speed = shape.speed != undefined && shape.speed > 0 ? shape.speed : 1;
        this.direction = shape.direction > 0 ? shape.direction : Math.random() * Math.PI * 2;
    }
}