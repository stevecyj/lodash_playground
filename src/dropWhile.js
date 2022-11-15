let _ = require('lodash')

var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

console.log(_.dropWhile(users, function(o) { return !o.active; }))
console.log(_.dropWhile(users, { 'user': 'barney', 'active': false }))
console.log(_.dropWhile(users, ['active', false]))
console.log(_.dropWhile(users, 'active'))