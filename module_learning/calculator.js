class Calculator{
	constructor(x,y){
		this.x = x;
		this.y = y;
	}

	Add(){
		return this.x+this.y;
	}

	Sub(){
		if(this.x>this.y){
			return this.x-this.y;
		}
		this.y - this.x;
	}

	Mul(){
		return this.x*this.y;
	}

}

module.exports = Calculator;