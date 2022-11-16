let _ = require('lodash')

let array = [1, [2, [3, [4]], 5]];

console.log(_.flattenDepth(array,1))
console.log(_.flattenDepth(array,2))