import {Canvas} from "./framwork-2023/Canvas";
import { Sky } from "./Drawable/Sky";
import {settings} from "./settings";
import {Hill} from "./Drawable/Hill";
import {Hsl} from "./framwork-2023/Colors/Hsl";
import {Rgb} from "./framwork-2023/Colors/Rgb";

const background = new Canvas(document.getElementById(settings.canvas.background) as HTMLCanvasElement);
const sky = new Sky(background);
const hills: Hill[] = [];

function getHills() {
    settings.hills.forEach((hill) => {
        const currentHill = new Hill({
            canvas: background,
            color: hill.color,
            startPosition: hill.startPosition,
            amplitude: hill.amplitude,
            radius: hill.radius
        });
        hills.push(currentHill);
    })
}

function drawBackground() {
    sky.draw();
    hills.forEach((hill)=> {
        hill.draw();
    })
}

function main() {
    const start = document.querySelector(settings.elements.start);
    start.classList.add(settings.elements.hide);
    getHills();
    drawBackground();
}

main();