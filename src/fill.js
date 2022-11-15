let _ = require('lodash')

let array=[1,2,3]

_.fill(array,'a')
console.log(array)

console.log(_.fill(Array(3), 2))

console.log(_.fill([4, 6, 8, 10], '*', 1, 3))