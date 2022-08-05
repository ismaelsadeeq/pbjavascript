class FieldElement {
  
  constructor(num,order){
    this.#checkInField(num,order)
    this.num = num;
    this.order = order;
  }
  toString(){
    return `FieldElement_ ${this.order}(${this.num})`
  }
  equal(other){
    this.#checkIsNull(other)
    return this.num === other.num && this.order === other.order
  }
  notEqual(other){
    this.#checkIsNull(other)
    return this.num != other.num && this.order != other.order
  }
  add(other){
    this.checkIsNull(other)
    let newNum = (this.num-other.num) % this.order
    return new FieldElement(newNum,this.order)
  }
  subtract(other){
    this.#checkIsNull(other)
    let newNum = (this.num - other.num) % this.order
    return new FieldElement(newNum,this.order)
  }
  multiply(other){
    this.#checkIsNull(other)
    let newNum = (this.num * other.num) % this.order;
    return new FieldElement(newNum,this.order)
  }
  pow(power){
    this.#checkPositiveInt(power)
    let n = power % (this.order -1);
   
    let newNum = (this.num ** n) % this.order;
    return new FieldElement(newNum,this.order)
  }
  divide(other){
    this.#checkIsNull(other)
    let newNum = this.num *((other.num * this.order-2) ** this.order) % this.order;
    return new FieldElement(newNum,this.order)
  }

  //Helper private methods
  #checkInField(num,order){
    if(num < 0 || num >= order){
      throw 'number is out of bound';
    }
  }
  #checkIsNull(other){
    if(other === null || other === undefined || (other instanceof FieldElement) == false){
      throw 'incorrect other field';
    } 
  }
  #checkPositiveInt(num){
    if(typeof(num) != 'number'){
      throw 'power has to be integer'
    }
  }

}
// let a = new FieldElement(3, 13)
// let b = new FieldElement(12, 13)
// let c = new FieldElement(10, 13)
// console.log((a.multiply(b).equal(c)))

// let a = new FieldElement(3, 13)
// let b = new FieldElement(1, 13)
// console.log(a.pow(3)==b)

// let a = new FieldElement(2, 19)
// let b = new FieldElement(7, 19)
// console.log(a.divide(b))

// let a = new FieldElement(3, 31)
// let b = new FieldElement(24, 31)
// console.log(a.divide(b))

let b = new FieldElement(1, 31)
console.log(b.pow(-1))
