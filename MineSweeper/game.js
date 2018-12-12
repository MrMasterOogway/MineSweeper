"use strict";
let mines = [];
let gameMap = [];

class Boxes {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.w = 40;
        this.h = 40;
        this.boxUsed = false;
        this.stop = false;
    }
    build() {
        for (let y = this.y; y < height; y += height / 16) {
            for (let x = this.x; x < width; x += width / 30) {
                let boxUsed = false;
                let col = 255;
                gameMap.push({
                    x,
                    y,
                    boxUsed,
                    col
                });
                rect(x, y, 20, 20);
            }
        }
    }
}