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

module.exports = {filter, map}