/**
Exercise 02 - Loops
Kamyar Karimi

This program draws a checkerboard (alternating square
of color) every time the mouse is pressed
with a different color scheme and different
checker size each time. 

*/

"use strict";

let colorSqr01 = "#FF0000";
let colorSqr02 = "#FFFFFF";

/**
Description of preload
*/
function preload() {}

/**
Description of setup
*/
function setup() {
	createCanvas(500, 500);
	background(100, 1, 1);
	// drawCheckerBoard();
}

/**
Description of draw()
*/
function draw() {}

function drawCheckerBoard() {
	for (var x = 0; x < width; x++) {
		square(x + 55, x + 55, 55);
	}
}
