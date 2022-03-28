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
  }
  while (i < array.length) {
    res = combine(res, array[i++])
  }
  return res
}

function loop(val, predicate, updatefn, bodyfn) {
  while (predicate(val)) {
    bodyfn(val)
    val = updatefn(val)
  }
}

function every(array, predicate) {
  for (let el of array) {
    if (!predicate(el)) return false;
  }
  return true;
}

module.exports = {filter, map, reduce, loop, every}