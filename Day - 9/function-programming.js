/*const oddNumbers = [1, 3, 5, 7, 9]
let evenNumbers = []

  let convert = (number, index) => {
        evenNumbers [index] = number - 1
  }
  oddNumbers.forEach(convert) //forEach
  console.log(evenNumbers)*/

/*const numbers = [1, 3, 5, 7, 9]

  const evenNumbers2 = numbers.map(number => number * 2) //map
  console.log(evenNumbers2)

  console.log(numbers.filter(number => number > 3 && number < 9)) //filter

  let sum = numbers.reduce((oldValue, currentValue) => oldValue + currentValue, 0) //reduce
  console.log(sum)

const names = ['Ali', 'Ayşe', 'Murat', 1]
const areAllStr = names.every((name) => typeof name === 'string') // hepsi string türünde mi?
console.log(areAllStr)

const str = names.some((name) => typeof name === 'number') // yalnızca biri string türündeyse true döndürür 
console.log(str)

console.log(numbers.find(number => number > 5)) // find
console.log(numbers.findIndex(number => number > 5)) //findIndex*/

const names = ["Aylin", "Zeynep", "Rüveyda", "Meltem", "Beyza"]
console.log(names.sort()) //orijinal diziyi değiştirir

const numbers = [71, 63, 97, 55, 2, 13]
numbers.sort((a,b) => a - b)
console.log(numbers)