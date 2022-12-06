/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

// Assets
const mainSongAddress = "assets/sounds/main.mp3";
let _mainSong = null;

// Variables
let strokeColorMain = {
	r: 54,
	g: 187,
	b: 206,
};
let sunStrokeColor = "#F38235";
let backgroundColor = {
	r: 0,
	g: 4,
	b: 66,
};

let shouldStart = false;

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

	// _mainSong.play();

	// ruler();
}

/**
Description of draw()
*/
function draw() {
	// background(random(50, 190), 30, 100);
	// background(190, 30, 100);
	background(backgroundColor.r, backgroundColor.g, backgroundColor.b);
	ruler();

	noFill();
	stroke(strokeColorMain.r, strokeColorMain.g, strokeColorMain.b);
	strokeWeight(5);

	if (shouldStart) {
		writeIntroText();
		drawSunRays();

		if (_mainSong.currentTime() >= 10.6) {
			animS.circle("c1", 80, 250, 120, 120, 100);
		}
		if (_mainSong.currentTime() > 12.2) {
			animS.circle("c2", 120, 250, 220, 120, 100);
			animS.circle("c3", 125, 265, 120, 120, 100);
		}

		if (_mainSong.currentTime() > 13) {
			drawLine1();
		}

		if (_mainSong.currentTime() > 19) {
			drawLine2();
		}

		if (_mainSong.currentTime() > 21) {
			drawLine3();
		}

		if (!_mainSong.isPlaying()) {
			shouldStart = false;
		}
	} else {
		writeText("press any key to start..", 250, 250, 0.6, {
			r: 255,
			g: 255,
			b: 255,
		});
	}
}

function keyPressed() {
	// animS.reset();/
	if (!shouldStart) {
		shouldStart = true;
		_mainSong.play();
	}
}

function writeIntroText() {
	// Top right text
	if (_mainSong.currentTime() >= 3.5) {
		writeText("sun", 600, 55, 0.4, { r: 255, g: 255, b: 255 });
	}
	if (_mainSong.currentTime() >= 4) {
		writeText("sees", 600, 65, 0.4, { r: 255, g: 255, b: 255 });
	}
	if (_mainSong.currentTime() >= 4.4) {
		writeText("you", 600, 75, 0.4, { r: 255, g: 255, b: 255 });
	}
	if (_mainSong.currentTime() >= 4.8) {
		writeText("and", 650, 75, 0.4, { r: 255, g: 255, b: 255 });
	}
	if (_mainSong.currentTime() >= 5.3) {
		writeText("glints", 650, 85, 0.4, { r: 255, g: 255, b: 255 });
	}

	// bottom left text after
	if (_mainSong.currentTime() >= 6.2) {
		writeText("sun", 100, 690, 0.4, { r: 255, g: 255, b: 255 });
	}
	if (_mainSong.currentTime() >= 7.1) {
		writeText("sun", 100, 700, 0.4, { r: 255, g: 255, b: 255 });
	}
	if (_mainSong.currentTime() >= 8) {
		writeText("sun", 100, 710, 0.4, { r: 255, g: 255, b: 255 });
	}
	if (_mainSong.currentTime() >= 8.8) {
		writeText("sun", 100, 720, 0.4, { r: 255, g: 255, b: 255 });
	}

	// bottom right text
	if (_mainSong.currentTime() >= 24.4) {
		writeText("submits", 600, 720, 0.4, { r: 255, g: 255, b: 255 });
	}
	if (_mainSong.currentTime() >= 25.3) {
		writeText("accepts", 600, 710, 0.4, { r: 255, g: 255, b: 255 });
	}
	if (_mainSong.currentTime() >= 26.2) {
		writeText("beholds", 600, 700, 0.4, { r: 255, g: 255, b: 255 });
	}
	if (_mainSong.currentTime() >= 27.2) {
		writeText("savors", 600, 690, 0.4, { r: 255, g: 255, b: 255 });
	}

	// middle orchid text
	if (_mainSong.currentTime() >= 28.4) {
		writeText("sun", 350, 290, 0.4, { r: 255, g: 255, b: 255 });
	}
	if (_mainSong.currentTime() >= 29.3) {
		writeText("engulfed", 350, 300, 0.4, { r: 255, g: 255, b: 255 });
	}
	if (_mainSong.currentTime() >= 30.2) {
		writeText("in", 350, 310, 0.4, { r: 255, g: 255, b: 255 });
	}
	if (_mainSong.currentTime() >= 31.1) {
		writeText("orchids'", 355, 320, 0.4, { r: 255, g: 255, b: 255 });
	}
	if (_mainSong.currentTime() >= 31.8) {
		writeText("tropics", 350, 330, 0.4, { r: 255, g: 255, b: 255 });
	}

	// Top left text
	if (_mainSong.currentTime() >= 42.2) {
		writeText("sun", 50, 50, 0.4, { r: 255, g: 255, b: 255 });
	}
	if (_mainSong.currentTime() >= 43.11) {
		writeText("wonders", 100, 50, 0.4, { r: 255, g: 255, b: 255 });
	}
	if (_mainSong.currentTime() >= 43.11) {
		writeText("grows", 55, 65, 0.4, { r: 255, g: 255, b: 255 });
	}
	if (_mainSong.currentTime() >= 44) {
		writeText("orchid", 80, 90, 0.4, { r: 255, g: 255, b: 255 });
	}
	if (_mainSong.currentTime() >= 46.22) {
		writeText("runs", 50, 100, 0.4, { r: 255, g: 255, b: 255 });
	}
	if (_mainSong.currentTime() >= 46.22) {
		writeText("through", 100, 130, 0.4, { r: 255, g: 255, b: 255 });
	}
	if (_mainSong.currentTime() >= 47.55) {
		writeText("sunrays", 55, 150, 0.4, { r: 255, g: 255, b: 255 });
		drawTopLeftSunRays();
	}

	// Right side text
	if (_mainSong.currentTime() >= 47.55) {
		writeText("sun", 650, 500, 0.4, { r: 255, g: 255, b: 255 });
	}
	if (_mainSong.currentTime() >= 47.55) {
		writeText("speeds", 650, 512, 0.4, { r: 255, g: 255, b: 255 });
	}
	if (_mainSong.currentTime() >= 47.55) {
		writeText("1000 times", 650, 524, 0.4, { r: 255, g: 255, b: 255 });
	}
	if (_mainSong.currentTime() >= 47.55) {
		writeText("to orchid", 662, 536, 0.4, { r: 255, g: 255, b: 255 });
	}
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
	// fill(random(50, 190), 30, random(50, 100));
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

function drawSunRays() {
	strokeWeight(0.6);
	stroke(sunStrokeColor);
	// print(`${mouseX} and ${mouseY}`);

	if (_mainSong.currentTime() >= 32.4) {
		animS.line("line1", 60, 346, 267, 326, 229);
	}
	if (_mainSong.currentTime() >= 35.1) {
		animS.line("line2", 50, 375, 273, 375, 241);
	}
	if (_mainSong.currentTime() >= 33.3) {
		animS.line("line3", 40, 400, 272, 410, 249);
	}
	if (_mainSong.currentTime() >= 34.2) {
		animS.line("line4", 60, 339, 327, 316, 342);
	}
	if (_mainSong.currentTime() >= 33.7) {
		animS.line("line5", 80, 367, 341, 366, 357);
	}
	if (_mainSong.currentTime() >= 34.6) {
		animS.line("line6", 50, 390, 334, 400, 353);
	}
	if (_mainSong.currentTime() >= 32.4) {
		animS.line("line7", 140, 336, 301, 317, 294);
	}
	if (_mainSong.currentTime() >= 36) {
		animS.line("line8", 50, 410, 303, 423, 300);
	}

	// Default setup
	strokeWeight(5);
	stroke(strokeColorMain.r, strokeColorMain.g, strokeColorMain.b);
}

function drawTopLeftSunRays() {
	strokeWeight(0.7);
	stroke(sunStrokeColor);

	animS.shape("leftSunRays1", 180, [
		[45, 90],
		[55, 85, 75, 70, 150, 55],
	]);
	animS.shape("leftSunRays2", 180, [
		[40, 150],
		[55, 145, 75, 130, 150, 90],
	]);

	// Default setup
	strokeWeight(5);
	stroke(strokeColorMain.r, strokeColorMain.g, strokeColorMain.b);
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

	// default setup
	strokeWeight(5);
	stroke(strokeColorMain.r, strokeColorMain.g, strokeColorMain.b);
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
