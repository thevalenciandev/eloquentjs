let {filter, map} = require("./ch5")

console.log(filter([1, 2, 3], el => el > 1))
console.log(filter([{date: "20220325", sunny: false}, {date: "20220326", sunny: true}], day => day.sunny))

console.log(map([1, 2, 3], el => el * 2))
console.log(map(["Hello", "Hi"], el => el + " World!"))