/**
Screen in Space - intransigence
Author: Kamyar Karimi

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

/**
Description of preload
*/
function preload() {}

/**
Description of setup
*/
function setup() {
	createCanvas(1080, 720);
	background("black");
	ruler();

	// drawWindows();
	// drawWindows(30);

	for (var i = 0; i < cols; i++) {
		drawWindows(i * windowHeightGaps);
	}

	typeWriter("this is a test text to see how it'd look.", 2, 300, 550, 50);
}

const rows = 17;
const cols = 10;
let windowGaps = 10;
const windowHeightGaps = 30;

const windowWidth = 5;
const windowHeight = 10;
const windowCount = 3;

let x = 325;
let y = 0;

let shouldDraw = true;

/**
Description of draw()
*/
function draw() {}

function drawWindows(col = 0) {
	x = 325;
	for (var i = 0; i < rows; i++) {
		for (var j = 0; j < 3; j++) {
			rect(x + windowWidth, col + 100, windowWidth, windowHeight);
			x += windowWidth;
		}
		x += windowGaps;
	}
}

function writeText(textToWrite) {
	text("this is a test text to see how it'd look.", 300, 500);
}

function typeWriter(sentence, n, x, y, speed) {
	if (n < sentence.length) {
		text(sentence.substring(0, n + 1), x, y);
		n++;
		setTimeout(function () {
			typeWriter(sentence, n, x, y, speed);
		}, speed);
	}
}

function ruler() {
	for (let i = 1; i < 1080; i++) {
		/* to have a clean look, as without this constraint
		 * all points would be written on the screen.
		 */
		if (i % 50 === 0) {
			fill("white");
			text(i, i, 20);
			text(i, 5, i);
		}
	}
}
