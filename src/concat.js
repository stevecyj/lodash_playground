let _ = require('lodash')

let arr = [1]
let other=_.concat(arr,2,[3],[[4]],[[[5]]])
console.log(other)
console.log(arr)