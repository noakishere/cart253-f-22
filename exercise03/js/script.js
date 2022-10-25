/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

const circleSize = 75;

/**
Description of preload
*/
function preload() {}

/**
Description of setup
*/
function setup() {
	createCanvas(500, 500);
	background(1, 1, 1);
	// drawTarget();
}

/**
Description of draw()
*/
function draw() {}

function drawTarget() {
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

	for (var i = 0; i < 4; i++) {
		if (i % 2 == 0) fill(color1.r, color1.b, color1.g);
		else fill(color2.r, color2.b, color2.g);

		circle(mouseX, mouseY, circleSize - 25 * i);
	}

	// fill(color1.r, color1.b, color1.g);
	// circle(250, 250, 100);

	// fill(color2.r, color2.b, color2.g);
	// circle(250, 250, 75);

	// fill(color1.r, color1.b, color1.g);
	// circle(250, 250, 50);

	// fill(color2.r, color2.b, color2.g);
	// circle(250, 250, 25);
}

function mouseClicked() {
	drawTarget();
}
