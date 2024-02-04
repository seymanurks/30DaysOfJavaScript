const oddNumbers = [1, 3, 5, 7, 9]
let evenNumbers = []

  let convert = (number, index) => {
        evenNumbers [index] = number - 1
  }
  oddNumbers.forEach(convert) //forEach
  console.log(evenNumbers)

  const evenNumbers2 = numbers.map(number => number * 2) //map
  console.log(evenNumbers2)

  console.log(oddNumbers.filter(number => number > 3 && number < 9))