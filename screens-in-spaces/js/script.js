/**
Screen in Space - intransigence
Author: Kamyar Karimi

Made for the Screens in Spaces assignment. An exercise on our contemporary history of racism on the very same campus that we call ours.
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
	"assets/sounds/special_sounds/viola03.mp3",
	"assets/sounds/special_sounds/drum01.mp3",
	"assets/sounds/special_sounds/viola04.mp3",
	"assets/sounds/special_sounds/viola05.mp3",
	"assets/sounds/special_sounds/viola06.mp3",
	"assets/sounds/special_sounds/shenai01.mp3",
	"assets/sounds/songs/final.mp3",
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
 * nextLine == draws another row of windows
 * specialSound == refers to the specialSound db
 * buttonShowUpSpeed == if more time is needed for the button to appear
 * newButtonText == changes the button's text
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
	},
	{
		text: "Sir George Williams University, later to be known as Concordia University after their merger with Loyola College, <br />hosted many international students from all around the world. <br />The institution believed in its <span class='color-red'>diversity</span> and the power to bring young bright-minded individuals together.",
	},
	{
		text: "Among many of those, six West Indian students changed the history of this building in 1968.",
		nextLine: true,
		buttonShowUpSpeed: 3500,
		specialSound: 0,
		newButtonText: "tell me how?",
	},
	{
		text: "Perry Anderson, a biology professor at the university, was accused of discrimination because of unfair grading.",
		newButtonText: "continue",
	},
	{
		text: "Specifically, towards the non-white students of the time.",
	},
	{
		text: "The students believed that he would grade the same papers, which were copied word by word, on the basis of the author's color. <br />Black students would get a considerably lower grade on the same <span class='color-red'>paper</span> than their white peers.",
	},
	{
		text: "And so, the issue was taken to the administration. Signed by the students affected by his actions.",
	},
	{
		text: "Rawl Frederick, one of the accusers, wrote a poem about the injustices that he suffered:",
	},
	{
		text: "They designate <span class='color-red'>institutions</span>, we disintegrate in infernos, They consummate animals that abort us, <br/>Nursing grounds for dysgenic beasts, Developing ghettoes/employing social workers to <span class='color-red'>create</span> Negroes. <br /><span class='color-red'>Man-trap</span>, I know your name, your face",
		specialSound: 2,
		buttonShowUpSpeed: 6000,
		nextLine: true,
	},
	{
		text: "the complaints against Anderson of racial bias were denied by the university administration.",
	},
	{
		text: "",
		nextLine: true,
	},
	{
		text: "",
		newButtonText: "What happened next?",
	},
	{
		text: "Students complaining about him were called <span class='color-red'>whiners</span> and just unhappy with their grades.",
		newButtonText: "continue",
		nextLine: true,
		specialSound: 6,
	},
	{
		text: "The administration stalled the jury talks. They were hoping that the demands would die on their own. <br /> That their frustrations would turn into disappointment. <br />That their shouts would turn into <span class='color-red'>sighs</span>.",
		nextLine: true,
		newButtonText: "somethings never change...",
		buttonShowUpSpeed: 1000,
	},
	{
		text: "Over 400 students, in an act of manifestation against the institution's horrible decision making, occupied the university's computer lab. <br/>The <span class='color-red'>ninth floor</span>.",
		newButtonText: "continue",
	},
	{
		text: "take a look at it on your right side.",
		nextLine: true,
		buttonShowUpSpeed: 5000,
		specialSound: 0,
	},
	{
		text: "",
		newButtonText: "I hear the protests were peaceful",
		nextLine: true,
	},
	{
		text: "",
		newButtonText: "That the students only demanded justice.",
		nextLine: true,
	},
	{
		text: "",
		buttonShowUpSpeed: 3000,
		newButtonText: "right?",
		nextLine: true,
	},
	{
		text: "The police <span class='color-red'>raided</span> the lab. <br/> The university had enough of their <span class='color-red'>games</span>",
		newButtonText: "continue",
		specialSound: 7,
		buttonShowUpSpeed: 6000,
	},
	{
		text: "A fire broke down in the computer lab",
		drawRedWindow: true,
	},
	{
		text: "hundreds of people watching outside",
	},
	{
		text: "and many chanted",
	},
	{
		text: "burn n------, <span class='color-red'>burn.</span>",
	},
	{
		text: "97 students were arrested. And once in custody, 87 of them were <span class='color-red'>divided</span> by their race. <br /> 38 black students taken out from the white crowd.",
	},
	{
		text: "",
		buttonShowUpSpeed: 1000,
		newButtonText: "who started the fire?",
	},
	{
		text: "no one knows",
		newButtonText: "continue",
	},
	{
		text: "right?",
		newButtonText: "right",
		buttonShowUpSpeed: 1000,
	},
	{
		text: "",
		newButtonText: "the end.",
		buttonShowUpSpeed: 1000,
	},
	{
		text: "this work was done thanks to the many documentations [1] of this horrible incident. <br /> It is our <span class='color-red'>homework</span> to acknowledge the sacrifices that our previous peers made, on the very <span class='color-red'>same</span> grounds that we walk on.",
		newButtonText: "[1] resources",
		buttonShowUpSpeed: 1000,
		finish: true,
	},
	{
		text: "",
	},
];

let textArrays = [];
let textCounter = 0;

/**
 * Preloading the songs
 */
function preload() {
	_mainSong = loadSound(mainSongAddress);
	for (var i = 0; i < sounds.length; i++) {
		p5songList[i] = loadSound(sounds[i]);
	}

	for (var i = 0; i < specialSoundsAddress.length; i++) {
		p5specialSoundList[i] = loadSound(specialSoundsAddress[i]);
	}
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

/**
 * Setup for the beginning
 */
function startUpMenu() {
	startButton = createButton("intransigence").addClass("start-btn");
	startButton.position(width / 2, height / 2);
	startButton.mousePressed(() => {
		startStory();
		p5songList[0].play();
	});
	_mainSong.loop();
}

/**
 * Triggered once the start button is pressed.
 */
function startStory() {
	pTextContainer = createP("").addClass("text-container");
	pTextContainer.position(550, 550, "fixed");

	drawWindows();

	createMyButton();
	startButton.style("display", "none");
}

/**
 * Processes each new text object and performs according to
 * variables.
 */
function processNewText(newText) {
	// Series of conditionals to react accordingly to each text object's properties
	if (newText.nextLine && windowDrawCounter <= 17) {
		print("HELLO");

		drawWindows(windowDrawCounter * windowHeightGaps);
		p5specialSoundList[3].play(); //drum sound
	}

	if (newText.newButtonText != null) {
		button.html(newText.newButtonText);
	}

	if (newText.specialSound != null) {
		playSpecialSound(newText.specialSound);
	}

	if (newText.drawRedWindow == true) {
		drawRedWindow();
	}

	if (newText.finish == true) {
		button.mousePressed(() => {
			window.open(
				"https://github.com/noakishere/cart253-f-22/blob/main/resources.md",
				"_blank"
			);
		});
		p5specialSoundList[3].play(); //drum sound
		p5specialSoundList[8].play(); //final song
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

function drawRedWindow() {
	fill("red");
	drawWindows(30);
	p5specialSoundList[3].play(); //drum sound
	fill("white");
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
