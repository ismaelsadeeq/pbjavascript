class Point {
  constructor(x,y,a,b){
    this.a = a;
    this.b = b;
    this.x = x;
    this.y = y;
    if((this.y **2)!= (this.x ** 3 + this.a*this.x + this.b)){
      throw `This cordinate is not a point in the curve ${this.x},${this.y}`
    }
  }
  toString(){
    return `x${this.x}, y ${this.y}, a ${this.a}, b${thus.b}`
  }
  equal(other){
    this.#checkIsPoint(other);
    return this.x === other.x && this.y === other.y && this.a === other.a && this.b === other.b
  }

  notEqual(other){
    this.#checkIsPoint(other);
    return this.x != other.x && this.y != other.y && this.a != other.a && this.b != other.b
  }
  add(other){
    this.#checkIsPoint(other);
    if(this.a != other.a || this.b != other.b){
      throw `The ${other.toString()},${this.toString()} points are not in the same curve` 
    }
    if(!this.x){
      return other;
    }
    if(!other.x){
      return this
    }
    if(this.x === other.x && this.y != other.y){
      return new Point(null,null,this.a,this.b)
    }
  }

  #checkIsPoint(point){
    if(point instanceof Point != true){
      throw 'not a point'
    }
  }
}

let p1 = new Point(-1, -1, 5, 7);
// let p2 = new Point(-1, -2, 5, 7) Gives an error that the cordinates is not a curve
// let p3 = new Point(2, 4, 5, 7);  Gives an error that the cordinates is not a curve
let p4 = new Point(18, 77, 5, 7);
// let p5 = new Point(5, 7, 5, 7);
