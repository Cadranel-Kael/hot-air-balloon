import {Canvas} from "../framwork-2023/Canvas";
import {Hsl} from "../framwork-2023/Colors/Hsl";
import {Rgb} from "../framwork-2023/Colors/Rgb";

export interface IHill {
    canvas: Canvas,
    color: Hsl|Rgb,
    startPosition: number,
    amplitude: number,
    radius: number,
}