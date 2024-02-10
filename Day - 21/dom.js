/*const h1 = document.getElementsByTagName("h1")

console.log(h1)

for (let index = 0; index < h1.length; index++) {
    console.log(h1[index])
}

[...h1].forEach(element => console.log(element))*/

const className = document.getElementsByClassName("title-1")
console.log(className)

const id = document.getElementById("title-3")
id.setAttribute("class", "baslik-3")
console.log(id )

let firstTitle = document.querySelectorAll('.title-1') 

firstTitle.forEach(element => console.log(element))

