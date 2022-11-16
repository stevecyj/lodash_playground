let _ = require('lodash')

let users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

console.log(_.findIndex(users, function(o){return o.user ==='barney'}))

console.log(_.findIndex(users,{user:'fred',active:true}))