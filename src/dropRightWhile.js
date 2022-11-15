let _ = require('lodash')

let users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

console.log(_.dropRightWhile(users, function(o){return !o.active}))

console.log(_.dropRightWhile(users,{user:'pebbles',active:false}))

console.log(_.dropRightWhile(users,['active',false]))

console.log(_.dropRightWhile(users,'active'))