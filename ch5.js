function filter(array, predicate) {
  let res = []
  for (let el of array) {
    if (predicate(el)) {
      res.push(el)
    }
  }
  return res
}

module.exports = {filter}