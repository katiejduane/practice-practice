const arr = [
  { item: 'bird', qty: 5 },
  { item: 'boot', qty: 5 },
  { item: 'bike', qty: 5 },
  { item: 'loot', qty: 5 },
]
const qtyTotal = arr.reduce(function (a, b) {
  console.log(a, b)
  return { qty: a.qty + b.qty }
})

console.log('total', qtyTotal)

var arr2 = [{ x: 1 }, { x: 2 }, { x: 4 }]

arr2.reduce(function (a, b) {
  return { x: a.x + b.x } // returns object with property x
})
// ES6
arr2.reduce((a, b) => ({ x: a.x + b.x }))
