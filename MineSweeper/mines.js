class mine {
    constructor() {
    this.x = Math.random();
    this.y = Math.random();
    this.col = "#00F3FF";
    }

    show() {
        fill(this.col);
        rect(this.x, this.y, 20, 20);
    }
}