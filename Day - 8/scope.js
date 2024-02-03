
let a = 'JavaScript' 
let b = 100 
function letsLearnScope() {
  console.log(a, b) // JavaScript 100
  if (true) {
    let a = 'Java'
    let b = 1000
    console.log(a, b) // Java 1000
  }
  console.log(a, b) // JavaScript 100
}
letsLearnScope()
console.log(a, b) // JavaScript 100


for(let i = 0; i < 3; i++) { //let scope içinde geçerlidir
    console.log(i) // 0, 1, 2
  }
  console.log(i)

for(var i = 0; i < 3; i++) { //var global scope sahiptir
    console.log(i) // 0, 1, 2
  }
  console.log(i) // 3