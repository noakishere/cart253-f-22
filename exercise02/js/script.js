/**
Exercise 02 - Loops
Kamyar Karimi

This program draws a checkerboard (alternating square
of color) every time the mouse is pressed
with a different color scheme and different
checker size each time. 
*/

"use strict";

/**
 * Initial value of the colors. The RGB values will be randomized before drawing the squares
 */
let colorSqr01 = {
	x: 0,
	y: 0,
	z: 0,
};

let colorSqr02 = {
	x: 0,
	y: 0,
	z: 0,
};

/**
 * Initial value of each checker/square. It will be randomized before drawing @randomColorGenerator
 */
let checkerSize = 55;

/**
 * These two counters are used to control the colour alignment of the squares
 */
let squareCounter = 0;
let rowCounter = 0;

/**
Description of preload
*/
function preload() {}

/**
 * Initial setup of the project.
 */
function setup() {
	createCanvas(500, 500);
	background(100, 1, 1);
	randomColorGenerator();
	drawCheckerBoard();
}

/**
Description of draw()
*/
function draw() {}

/**
 * Each mouse pressed generates a new checkerboard and clears the one previous to it.
 */
function mousePressed() {
	clear();
	squareCounter = 0;
	rowCounter = 0;
	randomColorGenerator();
	drawCheckerBoard();
}

/**
 * The main method of drawing the checker board.
 *  x & y are incremented by the size of the checkers.
 */
function drawCheckerBoard() {
	for (var y = 0; y < height; y += checkerSize) {
		squareCounter = 0; // Controller for assigning the right colour
		rowCounter++; // Controller for assigning the right colour
		for (var x = 0; x < width; x += checkerSize) {
			// Main condition operation that controls how to assign the colours.
			if (rowCounter % 2 == 0) {
				if (squareCounter % 2 == 0) {
					fill(colorSqr01.x, colorSqr01.y, colorSqr01.z);
				} else {
					fill(colorSqr02.x, colorSqr02.y, colorSqr02.z);
				}
			} else {
				if (squareCounter % 2 == 0) {
					fill(colorSqr02.x, colorSqr02.y, colorSqr02.z);
				} else {
					fill(colorSqr01.x, colorSqr01.y, colorSqr01.z);
				}
			}

			square(x, y, checkerSize);
			squareCounter++;
		}
	}
}

/**
 * Main function of assigning the randomly generated colour and size.
 */
function randomColorGenerator() {
	colorSqr01.x = random(255);
	colorSqr01.y = random(255);
	colorSqr01.z = random(255);

	colorSqr02.x = random(255);
	colorSqr02.y = random(255);
	colorSqr02.z = random(255);

	checkerSize = floor(random(25, 56));
}
