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

let windowDrawCounter = 0;

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
let texts = [
	{
		text: "Henry F. Hall building is located on De Maisonneuve Boulevard, <br />on Concordia's downtown Sir-George-Williams Campus.",
	},
	{
		text: "Its exterior is made of pre-fabricated, stressed concrete, <br />a feature of the <span class='color-red'>brutalist </span> movement, often associated with the French architect Le Corbusier.",
	},
	{
		text: "A number of  <span class='color-red'>social sciences</span> academic departments are concentrated in the Hall Building. ",
		// nextLine: true,
		// newButtonText: "LOL",
		// buttonShowUpSpeed: 1000,
	},
	{
		text: "Sir George Williams University, later to be known as Concordia University after their merger with Loyola College, <br />hosted many international students from all around the world. <br />It believed in its <span class='color-red'>diversity</span> and the power to bring young bright minded individuals together.",
	},
	{
		text: "",
	},
];

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
	// ruler();

	pTextContainer = createP("").addClass("text-container");
	pTextContainer.position(350, 450, "fixed");

	drawWindows();

	// for (var i = 0; i < cols; i++) {
	// 	drawWindows(i * windowHeightGaps);
	// }
	createMyButton();
}

let setupDone = false;

/**
Description of draw()
*/
function draw() {
	// background("black");
	// ruler();
	// drawWindows();
	// if (!setupDone) {
	// 	pTextContainer = createP("").addClass("text-container");
	// 	pTextContainer.position(500, 450, "fixed");
	// 	createMyButton();
	// 	setupDone = true;
	// }
	// for (var i = 0; i < cols; i++) {
	// 	drawWindows(i * windowHeightGaps);
	// }
	// drawEyes();
}

function processNewText(newText) {
	if (newText.nextLine && windowDrawCounter <= 17) {
		print("HELLO");

		drawWindows(windowDrawCounter * windowHeightGaps);
	}

	if (newText.newButtonText != null) {
		button.html(newText.newButtonText);
	}

	updateText(newText.text, newText.buttonShowUpSpeed ?? undefined);
}

function drawWindows(col = 0) {
	print(col);
	x = 325;
	for (var i = 0; i < rows; i++) {
		for (var j = 0; j < 3; j++) {
			rect(x + windowWidth, col + 100, windowWidth, windowHeight);
			x += windowWidth;
		}
		x += windowGaps;
	}

	windowDrawCounter++;
}

function updateText(sentence, buttonShowUpSpeed = 500) {
	button.style("display", "none");

	pTextContainer.html(sentence);

	let songRandom = floor(random(p5songList.length));
	p5songList[songRandom].play();

	textCounter++;

	if (textCounter < texts.length) {
		window.setTimeout(() => {
			button.style("display", "block");
		}, buttonShowUpSpeed);
	}
}

function createMyButton() {
	button = createButton("continue").addClass("myButton");
	button.position(500, 650);
	button.mousePressed(() => {
		let newText = texts[textCounter];
		processNewText(newText);
	});
}

/** TOOLS */

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
