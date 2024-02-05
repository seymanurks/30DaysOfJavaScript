const numbers = [1, undefined, 3, 4, 5]
let [number1, number2 = 2, number3] = numbers

console.log(number1, number2, number3)

const programmingLanguages = [
    ["HTML", "CSS", "JavaScript"],
    ["PHP", "MYSQL", "Node.js"]
]

const [frontend, backend] = programmingLanguages
console.log(backend)