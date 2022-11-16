
let _ = require('lodash')

let users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': true },
  { 'user': 'pebbles', 'active': false },
];

console.log(_.findLastIndex(users,function(o){return o.user=='pebbles'}))

console.log(_.findLastIndex(users,{user: 'barney', active: true}))

