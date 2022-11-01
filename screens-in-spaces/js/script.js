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
let sounds = [
	"assets/sounds/sound_fx01.mp3",
	"assets/sounds/sound_fx02.mp3",
	"assets/sounds/sound_fx03.mp3",
	"assets/sounds/sound_fx04.mp3",
];
let p5songList = [];

let specialSoundsAddress = [
	"assets/sounds/special_sounds/viola01.mp3",
	"assets/sounds/special_sounds/viola02.mp3",
	"assets/sounds/special_sounds/viola01.mp3",
];
let p5specialSoundList = [];

let mainSongAddress = "assets/sounds/songs/main.mp3";
let _mainSong = null;

/**
 * DOM elements
 */
let button;
let startButton;
let pTextContainer;

/**
 * texts to be shown
 */
let texts = [
	{
		text: "Henry F. Hall building is located on De Maisonneuve Boulevard, <br />on Concordia's downtown Sir-George-Williams Campus.",
		newButtonText: "continue",
	},
	{
		text: "Its exterior is made of pre-fabricated, stressed concrete, <br />a feature of the <span class='color-red'>brutalist </span> movement, often associated with the French architect Le Corbusier.",
	},
	{
		text: "A number of  <span class='color-red'>social sciences</span> academic departments are concentrated in the Hall Building. ",
		nextLine: true,

		buttonShowUpSpeed: 1000,
	},
	{
		text: "Sir George Williams University, later to be known as Concordia University after their merger with Loyola College, <br />hosted many international students from all around the world. <br />It believed in its <span class='color-red'>diversity</span> and the power to bring young bright minded individuals together.",
		specialSound: 2,
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

	for (var i = 0; i < specialSoundsAddress.length; i++) {
		p5specialSoundList[i] = loadSound(specialSoundsAddress[i]);
	}
	_mainSong = loadSound(mainSongAddress);
}

/**
Description of setup
*/
function setup() {
	createCanvas(1080, 720);
	background("black");
	// ruler();

	startUpMenu();
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

function startUpMenu() {
	startButton = createButton("intransigence").addClass("start-btn");
	startButton.position(width / 2, height / 2);
	startButton.mousePressed(() => {
		startStory();
		p5songList[0].play();
	});
	_mainSong.loop();
}

function startStory() {
	pTextContainer = createP("").addClass("text-container");
	pTextContainer.position(550, 550, "fixed");

	drawWindows();

	// for (var i = 0; i < cols; i++) {
	// 	drawWindows(i * windowHeightGaps);
	// }

	createMyButton();
	startButton.style("display", "none");
}

/**
 * Processes each new text object and performs according to
 * variables.
 */
function processNewText(newText) {
	if (newText.nextLine && windowDrawCounter <= 17) {
		print("HELLO");

		drawWindows(windowDrawCounter * windowHeightGaps);
	}

	if (newText.newButtonText != null) {
		button.html(newText.newButtonText);
	}

	if (newText.specialSound != null) {
		playSpecialSound(newText.specialSound);
	}

	updateText(newText.text, newText.buttonShowUpSpeed ?? undefined);
}

function playSoundEffect() {
	let songRandom = floor(random(p5songList.length));
	p5songList[songRandom].play();
}

function playSpecialSound(soundIndex) {
	p5specialSoundList[soundIndex].play();
}

/**
 * Draws each columns windows in 3 window units to imitate
 * the building
 */
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

/**
 * As it takes the parameters from each processed text object
 * it updates the text field and invokes sound fx function.
 */
function updateText(sentence, buttonShowUpSpeed = 500) {
	button.style("display", "none");

	pTextContainer.html(sentence);

	playSoundEffect();

	textCounter++;

	// once we've been through the array, it stops showing the continue button
	if (textCounter < texts.length) {
		window.setTimeout(() => {
			button.style("display", "block");
		}, buttonShowUpSpeed);
	}
}

function createMyButton() {
	button = createButton("start").addClass("myButton");
	button.position(500, 650);
	button.mousePressed(() => {
		let newText = texts[textCounter];
		processNewText(newText);
	});
}

/** PROD TOOLS */

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
