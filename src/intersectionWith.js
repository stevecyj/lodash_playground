let _ = require('lodash')

let objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
let others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

console.log(_.intersectionWith(objects, others,_.isEqual))