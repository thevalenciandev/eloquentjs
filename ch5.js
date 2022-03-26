function filter(array, predicate) {
  let res = []
  for (let el of array) {
    if (predicate(el)) {
      res.push(el)
    }
  }
  return res
}

function map(array, transform) {
  let res = []
  for (let el of array) {
    res.push(transform(el))
  }
  return res
}

function reduce(array, combine, start) {
  let res = start
  let i = 0
  if (res == null) {
    res = array[0]
    i++
    console.log("We start with", res, i)
  }
  while (i < array.length) {
    res = combine(res, array[i++])
  }
  return res
}

module.exports = {filter, map, reduce}