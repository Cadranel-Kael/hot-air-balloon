import {Canvas} from "../Canvas";
import {Hsl} from "../Colors/Hsl";
import {Rgb} from "../Colors/Rgb";
import {Position} from "./Position";
import {Hsla} from "../Colors/Hsla";
import {Rgba} from "../Colors/Rgba";

export interface IShape {
    canvas: Canvas;
    position: Position;
    speed?: number;
    direction?: number;
    color: Hsl | Rgb | Hsla | Rgba;
}