/**
In-class exercise 01
Author Kamyar Karimi

Script for the in-class exercise 01, CART-253
*/

"use strict";

const mouseColor = "#FF0000";
const keyColor = "#00FF00";
const backColor = "#0000FF";
const originalBackgroundColor = "#FFFFFF";

let mouseClickIndex = 0;

/**
Description of preload
*/
function preload() {}

/**
Description of setup
*/
function setup() {
	createCanvas(500, 500);
	background(originalBackgroundColor);
}

/**
Description of draw()
*/
function draw() {
	if (mouseIsPressed) {
		if (mouseClickIndex % 3 === 0) {
			background(backColor);
		} else {
			background(originalBackgroundColor);
			fill(mouseColor);
			circle(250, 250, 30);
		}
	} else if (keyIsPressed) {
		mouseClickIndex = 0;
		background(originalBackgroundColor);
		fill(keyColor);
		circle(250, 250, 30);
	} else if (!mouseIsPressed || !keyIsPressed) {
		clear();
	}
}

function mousePressed() {
	mouseClickIndex++;
	console.log(mouseClickIndex);
}
