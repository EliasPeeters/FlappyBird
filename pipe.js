function Pipe() {
	this.top = random(height/2);
	this.bottom = random(height/2);
	this.x = width;
	this.w = 20;
	this.speed = 2;

	this.highlight = false;

	this.hits = function(bird) {
		if (bird.y < this.top || bird.y > height - this.bottom) {
			if (bird.x == this.x) {
				this.highlight = true;
				return true;	
			}
		}
		return false;
	}

	this.scored = function(bird) {

		if (bird.x > this.x && bird.x < this.x + this.w) {
			return true;	
		}	
	}

	this.show = function() {
		fill(5, 5, 5);

		if (this.highlight) {
			fill(252, 38, 33);
		}
		rect(this.x, 0, this.w, this.top);
		rect(this.x, height - this.bottom, this.w, this.bottom);
	}

	this.update = function() {
		this.x -= this.speed;
	}
}