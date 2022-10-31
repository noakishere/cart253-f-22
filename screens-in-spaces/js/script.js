/**
Screen in Space - intransigence
Author: Kamyar Karimi

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

/**
 * Windows settings and how they should be drawn
 */
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
 * Sounds
 */
let sounds = ["assets/sounds/bark.wav", "assets/sounds/pickupCoin.wav"];
let p5songList = [];

/**
 * DOM elements
 */
let button;
let pTextContainer;

/**
 * texts to be shown
 */
let texts = ["new text that is kinda long", "newer text that is even longer hehehe"];
let textArrays = [];
let textCounter = 0;

/**
Description of preload
*/
function preload() {
	for (var i = 0; i < sounds.length; i++) {
		p5songList[i] = loadSound(sounds[i]);
	}
}

/**
Description of setup
*/
function setup() {
	createCanvas(1080, 720);
	background("black");
	ruler();

	pTextContainer = createP("").addClass("text-container");
	pTextContainer.position(500, 450, "fixed");

	for (var i = 0; i < cols; i++) {
		drawWindows(i * windowHeightGaps);
	}
	createMyButton();
}

/**
Description of draw()
*/
function draw() {
	drawEyes();
}

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

function typeWriter(sentence, n, x, y, speed) {
	button.style("display", "none");

	if (n < sentence.length) {
		text(sentence.substring(0, n + 1), x, y);
		n++;
		window.setTimeout(function () {
			typeWriter(sentence, n, x, y, speed);
		}, speed);
	} else {
		button.style("display", "block");
		textCounter++;
		print(`${textCounter} counter`);
	}
}

function updateText(sentence) {
	button.style("display", "none");

	pTextContainer.html(sentence);

	p5songList[textCounter].play();

	if (textCounter <= textArrays.length) {
		window.setTimeout(() => {
			button.style("display", "block");
			textCounter++;
			print(`${textCounter} counter`);
		}, 300);
	}
}

function createMyButton() {
	button = createButton("continue").addClass("myButton");
	button.position(500, 650);
	button.mousePressed(() => {
		updateText(texts[textCounter]);
	});
}

/*
 * have a clearer idea of the points on the canvas
 * only used for production, won't be used for the final result
 */
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
