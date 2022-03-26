let {filter, map, reduce} = require("./ch5")

console.log(filter([1, 2, 3], el => el > 1))
console.log(filter([{date: "20220325", sunny: false}, {date: "20220326", sunny: true}], day => day.sunny))

console.log(map([1, 2, 3], el => el * 2))
console.log(map(["Hello", "Hi"], el => el + " World!"))

console.log(reduce([1, 2, 3], (x, y) => x + y))
console.log(reduce([1, 2, 3], (x, y) => x + y, 100))
console.log(reduce(["How", "are", "you?"], (x, y) => x + " " + y))