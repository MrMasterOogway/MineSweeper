class mine {
    constructor() {
    this.x = Math.floor(Math.random() * 600);
    this.y = Math.floor(Math.random() * 280);
    this.col = "#00F3FF";
    }

    show() {
        fill(this.col);
        rect(this.x, this.y, 20, 20);
    }

    build() {
        for (let y = this.y; y < height; y += height / 20) {
            for (let x = this.x; x < width; x += width / 10) {
                let col = 255;
                gameMap.push({
                    x,
                    y,
                    col
                });
                rect(x, y, 20, 20);
            }
        }
    }
}