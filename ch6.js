class Matrix {
  constructor(width, heigth, element = (x, y) => undefined) {
    this.width = width
    this.heigth = heigth
    this.content = []

    for (let y = 0; y < heigth; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y)
      }
    }
  }

  get(x, y) {
    return this.content[y * this.width + x]
  }

  set(x, y, value) {
    this.content[y * this.width + x] = value
  }

  [Symbol.iterator]() {
    return new MatrixIterator(this)
  }
}

class MatrixIterator {
  constructor(matrix) {
    this.x = 0
    this.y = 0
    this.matrix = matrix
  }

  next() {
    if (this.y == this.matrix.heigth) {
      return {done: true}
    }
    let value = {x: this.x,
                y: this.y,
                value: this.matrix.get(this.x, this.y)}
    this.x++
    if (this.x == this.matrix.width) {
      // move to next row
      this.x = 0
      this.y++
    }
    return {value, done: false}
  }
}

class Vec {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  plus(otherVec) {
    return new Vec(this.x + otherVec.x, this.y + otherVec.y)
  }

  minus(otherVec) {
    return new Vec(this.x - otherVec.x, this.y - otherVec.y)
  }

  // distance to 0,0
  // using Pythagoras: a^2 + b^2 = c^2
  get length() {
    return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2))
  }
  
}

// Very slow implementation below, but just following the book 
class Group {
  constructor(vals) {
    this.values = []
  }
  
  static from(iterable) {
    const group = new Group()
    iterable.forEach(v => group.add(v))
    return group
  }

  add(val) {
    if (!this.has(val)) {
      this.values.push(val)
    }
  }

  delete(val) {
    this.values = this.values.filter(v => v !== val)
  }

  has(val) {
    return this.values.includes(val)
  }

  [Symbol.iterator]() {
    return new GroupIterator(this.values)
  }

}

class GroupIterator {
  constructor(coll) {
    this.coll = coll
    this.index = 0
  }
  
  next() {
    if (this.index == this.coll.length) {
      return {done: true}
    }
    return {done: false, value: this.coll[this.index++]}
  }
}

module.exports = {Matrix, Vec, Group}