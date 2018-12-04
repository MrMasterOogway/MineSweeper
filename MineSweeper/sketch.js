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
}

function keyPressed() {
    if(keyPressed = 70) {
	setup();
        }
    }
	
