/**
Loops exercise
Author Kamyar Karimi

Create a piece of code that uses a function to
draw targets on the screen using a for loop when
the mouse is clicked at the mouse position. The
targets should alternate between two colours
that are randomly selected with each new target.
Use a different function to return a value to
check the mouse position.

If the mouse position
in in the upper right or lower left, add a circle to
the next target drawn. If the position is in the
lower right or upper left, remove a circle in the
next target drawn
*/

"use strict";

// max circle size
const circleSize = 100;
// initial number of circles. Subject to change according to mouse position
let numberOfCircles = 4;

/**
 * initial setup
 */
function setup() {
	createCanvas(500, 500);
	background(1, 1, 1);
}

/**
 * Draws the targets according to the initial circleSize and the numberOfCircles
 * that we want on our target.
 */
function drawTarget() {
	// Randomization of the colors for each target
	let color1 = {
		r: random(255),
		b: random(255),
		g: random(255),
	};
	let color2 = {
		r: random(255),
		b: random(255),
		g: random(255),
	};

	for (var i = 0; i < numberOfCircles; i++) {
		// every other color is different to make the target visible
		if (i % 2 == 0) fill(color1.r, color1.b, color1.g);
		else fill(color2.r, color2.b, color2.g);

		// circle's size is divided evenly according to the number of circles that we want
		circle(mouseX, mouseY, circleSize - (circleSize / numberOfCircles) * i);
	}
}

/**
 * Checks mouseX and mouseY and modifies numberOfCircles accordingly
 */
function checkMousePos() {
	// lower left or upper right condition adds a circle
	if ((mouseX < 250 && mouseY > 250) || (mouseX > 250 && mouseY < 250)) {
		return true;
	} else {
		// upper left or lower right decreases the size
		return false;
	}
}

/**
 * Triggers every time mouse is clicked
 */
function mouseClicked() {
	if (checkMousePos()) numberOfCircles++;
	else numberOfCircles--;

	// // to ensure we always have the target format
	if (numberOfCircles <= 1) numberOfCircles = 2;

	drawTarget();
}
