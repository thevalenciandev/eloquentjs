// CHAPTER 5
let {filter, map, reduce, loop, every} = require("./ch5")

console.log(filter([1, 2, 3], el => el > 1))
console.log(filter([{date: "20220325", sunny: false}, {date: "20220326", sunny: true}], day => day.sunny))

console.log(map([1, 2, 3], el => el * 2))
console.log(map(["Hello", "Hi"], el => el + " World!"))

console.log(reduce([1, 2, 3], (x, y) => x + y))
console.log(reduce([1, 2, 3], (x, y) => x + y, 100))
console.log(reduce(["How", "are", "you?"], (x, y) => x + " " + y))

// Exercises
// Flattening: Reduce + concat
console.log(reduce([[1,2], [3,4], [5,6]], (arr1, arr2) => arr1.concat(arr2)))
// Your own loop
loop(5, n => n > 0, n => n - 1, console.log)
// Every: all elements must be true
console.log(every([11,12,13], el => el > 10))
console.log(every(["Hey", "Hi", "Howdy"], el => el.length > 2))
console.log(every([], n => n < 10));

// CHAPTER 6
let {Matrix, Vec, Group} = require('./ch6')
let m = new Matrix(2, 2, (x,y) => `value ${x},${y}`)
for (let {x,y,value} of m) {
  console.log(x,y,value)
}
// Exercises
// Vector
console.log(new Vec(1, 2).plus(new Vec(2, 3)))
console.log(new Vec(1, 2).minus(new Vec(2, 3)))
console.log(new Vec(3, 4).length)
// Set
let group = Group.from([10, 20])
console.log(group)
console.log(group.has(10))
console.log(group.has(30))
group.add(10)
group.delete(10)
console.log(group.has(10))
console.log(group)