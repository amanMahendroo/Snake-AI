class Snake {
	constructor() {
		this.vel = createVector(0, 1)
		this.tail = 1
		this.trail = []
	}

	animate() {
		while (this.trail.length <= this.tail)
			this.trail.push(createVector())

		let pos = p5.Vector.add(this.trail[0], this.vel)
		if (pos.x > 19 || pos.x < 0 || pos.y > 19 || pos.y < 0) 	
			gameOver()

		if (this.trail[0].equals(food.pos)) {
			++this.tail
			food.pos = createVector(floor(random(0, 20)), floor(random(0, 20)))
		}
		
		noStroke()
		fill(255)
		this.trail.map((el) => rect(el.x * 25 + 1, el.y * 25 + 1, 23, 23))


		// if (this.trail.reduce((acc, cur, idx) => acc && !this.trail[0].equals(cur)), true) {
		// 	gameOver()
		// }

		this.trail.pop()
		this.trail.unshift(pos)
	}

	moveUp() { this.vel = createVector(0, -1) }
	moveRight() { this.vel = createVector(1, 0) }
	moveDown() { this.vel = createVector(0, 1) }
	moveLeft() { this.vel = createVector(-1, 0) }
}


class Apple {
	constructor() {
		this.pos = createVector(floor(random(0, 20)), floor(random(0, 20)))
	}

	animate() {
		noStroke()
		fill(255, 0, 0)
		rect(this.pos.x * 25 + 1, this.pos.y * 25 + 1, 23, 23)
	}
}

function checkOverlap() {
	if (true) {}
}

function gameOver() {
	ai = new Snake()
}