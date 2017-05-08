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
	// makes the picture the height of the window on tall screens and the width on narrow ones
    if (windowWidth > windowHeight) {
        image(img, windowWidth / 2, windowHeight / 2, windowHeight, windowHeight);
    } else {
        image(img, windowWidth / 2, windowHeight / 2, windowWidth, windowWidth);
    }



    // move the origin of the line to the pivot point
    translate(windowWidth / 2, windowHeight / 2);

    // then rotate the line around the pivot point by a number of degrees equal to the frame count of the sketch

// three steady hands...
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

// and one erratic one...
    stroke("gold");
    rotate(radians(frameCount * random(-1, 1)));
    strokeWeight(3);
    line(0, 0, 10, 100);

    fill(0);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
