/*function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())*/

function outerFunction() {
    let count = 0;
    function up() {
        count++
        return count
    } 
    function down() {
        count--
        return count
    }

    return {
        up, down
    }
}
const innerFunc = outerFunction()
console.log(innerFunc.up())
console.log(innerFunc.up())
console.log(innerFunc.up())
console.log(innerFunc.down())