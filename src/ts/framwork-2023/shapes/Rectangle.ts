import {Position} from "../Types/position";
import {Shape} from "./Shape";
import {Animatable} from "../Types/Animatable";
import {IRectangle} from "../Types/IRectangle";

export class Rectangle extends Shape implements Animatable {
    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }
    private _width: number;
    private _height: number;

    constructor(rectangle: IRectangle) {
        super(rectangle);
        this._width = rectangle.width;
        this._height = rectangle.height;
    }

    draw() {
        this.ctx.save(); // sauvegarde l'état actuel du contexte
        this.ctx.translate(Math.trunc(this.position.x + this._width / 2), Math.trunc(this.position.y + this._height / 2)); // déplace l'origine du système de coordonnées au centre du rectangle
        this.ctx.rotate(this.direction); // applique la transformation de rotation
        this.ctx.fillStyle = `${this.color}`;
        this.ctx.fillRect(-Math.trunc(this._width / 2), -Math.trunc(this._height / 2), this._width, this._height); // dessine le rectangle centré sur l'origine
        this.ctx.restore(); // restaure l'état précédent du contexte
        return this;
    }

    update() {
        this.position.x += Math.floor(this.speed * Math.cos(this.direction));
        this.position.y += Math.floor(this.speed * Math.sin(this.direction));

        if (this.position.x <= 0 || this.position.x + this._width >= this.canvas.width) {
            this.direction = Math.PI - this.direction;
        }

        if (this.position.y <= 0 || this.position.y + this._height >= this.canvas.height) {
            this.direction = -this.direction;
        }
    }

    setDirectionByMousePosition(position: Position) {
        this.direction = Math.atan2(position.y - this.position.y, position.x - this.position.x);
    }
}