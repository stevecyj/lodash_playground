let _ = require('lodash')

console.log(_.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor))

console.log(_.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x'))