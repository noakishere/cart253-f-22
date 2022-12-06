/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

const mainSongAddress = "assets/sounds/main.mp3";
let _mainSong = null;

/**
Description of preload
*/
function preload() {
	_mainSong = loadSound(mainSongAddress);
}

/**
Description of setup
*/
function setup() {
	createCanvas(750, 750);

	_mainSong.play();

	// ruler();
}

/**
Description of draw()
*/
function draw() {
	background(random(50, 190), 30, 100);
	// background(190, 30, 100);
	ruler();

	noFill();
	stroke(0, 0, 100);
	strokeWeight(5);

	if (_mainSong.currentTime() >= 5) {
		animS.circle("c1", 80, 250, 120, 120, 100);
	}
	if (_mainSong.currentTime() > 10) {
		animS.circle("c2", 120, 250, 220, 120, 100);
		animS.circle("c3", 125, 265, 120, 120, 100);
	}

	if (_mainSong.currentTime() > 13) {
		drawLine1();
	}

	if (_mainSong.currentTime() > 19) {
		writeText("leaves", 100, 100);
		drawLine3();
	}

	if (_mainSong.currentTime() > 21) {
		drawLine2();
	}
}

function keyPressed() {
	animS.reset();
}

function drawLine1() {
	animS.shape("curve1", 150, [
		[60, 500],
		[100, 100, 150, 220, 200, 180],
		[600, 180],
		[400, 100, 700, 220, 800, 180],
		[900, 180],
	]);
}

function drawLine2() {
	// fill("RED");
	animS.shape("curve2", 150, [
		[750, 600],
		[500, 550, 450, 220, 100, 600],
		[300, 180],
		[400, 100, 700, 220, 800, 180],
		[500, 380],
		[350, 300, 400, 500, 550, 650],
	]);
	noFill();
}

function drawLine3() {
	fill("RED");
	animS.shape("curve3", 180, [
		[50, 800],
		[500, 550, 450, 220, 100, 600],
		[500, 650],
		[400, 100, 700, 220, 800, 180],
		[500, 380],
		[350, 300, 400, 500, 550, 650],
	]);
	noFill();
}

function writeText(
	textToWrite,
	x,
	y,
	newStrokeWeight = 1,
	strokeColour = { r: 0, b: 0, g: 100 }
) {
	strokeWeight(newStrokeWeight);
	stroke(strokeColour.r, strokeColour.b, strokeColour.g);
	text(textToWrite, x, y);
	strokeWeight(5);
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
