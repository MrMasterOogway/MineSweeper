// TOP DOWN PLAYER
"use strict";

// Declare Global Variables
let game = new Boxes();

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(600, 320);
	// Initialize Global Variables
	mines[0] = new mine();
	game.build();

	for (let i = 0; i < 98; i++) {
		mines.push(new mine());
	}
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	background(255);
	for (let i = 0; i < gameMap.length; i++) {
		fill(gameMap[i].col)
		rect(gameMap[i].x, gameMap[i].y, 40, 40);
	}
	for (let i = mines.length - 1; i >= 0; i--) {
		mines[i].show();
	}
	minespot();
}

function minespot() {
	for (let i = 0; i < mines.length; i++) {
	if(mines[i].x < 20) {
		mines[i].x = 0
	}
}
for (let i = 0; i < mines.length; i++) {
	if(mines[i].x < 40 && mines[i].x > 20) {
		mines[i].x = 20
	}
}
for (let i = 0; i < mines.length; i++) {
	if(mines[i].x < 60 && mines[i].x > 40) {
		mines[i].x = 40
	}
}
for (let i = 0; i < mines.length; i++) {
	if(mines[i].x < 80 && mines[i].x > 60) {
		mines[i].x = 60
	}
}
for (let i = 0; i < mines.length; i++) {
	if(mines[i].x < 100 && mines[i].x > 80) {
		mines[i].x = 80
	}
}
for (let i = 0; i < mines.length; i++) {
	if(mines[i].x < 120 && mines[i].x > 100) {
		mines[i].x = 100
	}
}
for (let i = 0; i < mines.length; i++) {
	if(mines[i].x < 140 && mines[i].x > 120) {
		mines[i].x = 120
	}
}
for (let i = 0; i < mines.length; i++) {
	if(mines[i].x < 160 && mines[i].x > 140) {
		mines[i].x = 140
	}
}
for (let i = 0; i < mines.length; i++) {
	if(mines[i].x < 180 && mines[i].x > 160) {
		mines[i].x = 160
	}
}
for (let i = 0; i < mines.length; i++) {
	if(mines[i].x < 200 && mines[i].x > 180) {
		mines[i].x = 180
	}
}
for (let i = 0; i < mines.length; i++) {
	if(mines[i].x < 220 && mines[i].x > 200) {
		mines[i].x = 200
	}
}
for (let i = 0; i < mines.length; i++) {
	if(mines[i].x < 240 && mines[i].x > 220) {
		mines[i].x = 220
	}
}
for (let i = 0; i < mines.length; i++) {
	if(mines[i].x < 260 && mines[i].x > 240) {
		mines[i].x = 240
	}
}
for (let i = 0; i < mines.length; i++) {
	if(mines[i].x < 280 && mines[i].x > 260) {
		mines[i].x = 260
	}
}
for (let i = 0; i < mines.length; i++) {
	if(mines[i].x < 300 && mines[i].x > 280) {
		mines[i].x = 280
	}
}
for (let i = 0; i < mines.length; i++) {
	if(mines[i].x < 320 && mines[i].x > 300) {
		mines[i].x = 300
	}
}
for (let i = 0; i < mines.length; i++) {
	if(mines[i].x < 340 && mines[i].x > 320) {
		mines[i].x = 320
	}
}
for (let i = 0; i < mines.length; i++) {
	if(mines[i].x < 360 && mines[i].x > 340) {
		mines[i].x = 340
	}
}
for (let i = 0; i < mines.length; i++) {
	if(mines[i].x < 380 && mines[i].x > 360) {
		mines[i].x = 360
	}
}
for (let i = 0; i < mines.length; i++) {
	if(mines[i].x < 400 && mines[i].x > 380) {
		mines[i].x = 380
	}
}
for (let i = 0; i < mines.length; i++) {
	if(mines[i].x < 420 && mines[i].x > 400) {
		mines[i].x = 400
	}
}
for (let i = 0; i < mines.length; i++) {
	if(mines[i].x < 440 && mines[i].x > 420) {
		mines[i].x = 420
	}
}
for (let i = 0; i < mines.length; i++) {
	if(mines[i].x < 460 && mines[i].x > 440) {
		mines[i].x = 440
	}
}
for (let i = 0; i < mines.length; i++) {
	if(mines[i].x < 480 && mines[i].x > 460) {
		mines[i].x = 460
	}
}
for (let i = 0; i < mines.length; i++) {
	if(mines[i].x < 500 && mines[i].x > 480) {
		mines[i].x = 480
	}
}
for (let i = 0; i < mines.length; i++) {
	if(mines[i].x < 520 && mines[i].x > 500) {
		mines[i].x = 500
	}
}
for (let i = 0; i < mines.length; i++) {
	if(mines[i].x < 540 && mines[i].x > 520) {
		mines[i].x = 520
	}
}
for (let i = 0; i < mines.length; i++) {
	if(mines[i].x < 560 && mines[i].x > 540) {
		mines[i].x = 540
	}
}
for (let i = 0; i < mines.length; i++) {
	if(mines[i].x < 580 && mines[i].x > 560) {
		mines[i].x = 560
	}
}
for (let i = 0; i < mines.length; i++) {
	if(mines[i].x < 600 && mines[i].x > 580) {
		mines[i].x = 580
	}
}


}