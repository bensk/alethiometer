var x = 0;
var y = 0;

function preload() {
	img = loadImage("alethiometer.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background("white");
	imageMode("center");
	if (windowWidth > windowHeight) {
		image(img, windowWidth / 2, windowHeight / 2, windowHeight, windowHeight);
	} else{
		image(img, windowWidth / 2, windowHeight / 2, windowWidth, windowWidth);
	}

	// then rotate the grid around the pivot point by a
	// number of degrees equal to the frame count of the sketch
	// move the origin to the pivot point
	translate(windowWidth / 2, windowHeight / 2);

	// then rotate the grid around the pivot point by a
	// number of degrees equal to the frame count of the sketch
	stroke("grey");
	rotate(radians(frameCount / 2));
	strokeWeight(10);
	line(0, 0, 50, 100);

	rotate(radians(frameCount));
	strokeWeight(5);
	line(0, 0, 10, 75);

	rotate(radians(-1 * frameCount / 5));
	strokeWeight(20);
	line(0, 0, 10, 50);

	stroke("gold");
	rotate(radians(frameCount * random(-1, 1)));
	strokeWeight(3);
	line(0, 0, 10, 100);

	fill(0);
	// rect(0, 0, 100, 100);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
