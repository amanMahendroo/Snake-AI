function sigmoidPlus(x) {
	return (2 / (1 + Math.exp(-x))) - 1;
}

function squish(x) {
	if (x < 0) {
		return -1
	}
	if (x == 0) {
		return 0
	}
	if (x > 0) {
		return 1
	}
}

function setup() {
	createCanvas(500, 500);
	food = new Apple();
	ai = new Snake();
	frameRate(10);
}

let ai, food, highscore = 0;

function draw() {
	background(0);
	ai.animate();
	food.animate();
	
	if (ai.tail - 1 > highscore) {
		highscore = ai.tail - 1;
	}

	fill(255)
	stroke(255);
	textSize(20);
	text(ai.tail - 1, 10, 20);
	text(highscore, 470, 20);
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		ai.moveUp();
	}

	if (keyCode == RIGHT_ARROW) {
		ai.moveRight();
	}

	if (keyCode == DOWN_ARROW) {
		ai.moveDown();
	}

	if (keyCode == LEFT_ARROW) {
		ai.moveLeft();
	}
}