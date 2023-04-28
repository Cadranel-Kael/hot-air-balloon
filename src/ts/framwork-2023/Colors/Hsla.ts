import {Hsl} from "./Hsl";

export class Hsla extends Hsl {
    get alpha(): number {
        return this._alpha;
    }

    set alpha(value: number) {
        this._alpha = value;
    }

    private _alpha: number;

    constructor(hue: number, saturation: number, lightness: number, alpha: number = 1) {
        super(hue, saturation, lightness);
        this._alpha = alpha;
    }

    public toString = (): string => {
        return `hsla(${this.hue},${this.saturation}%,${this.lightness}%, ${this._alpha})`;
    }
}