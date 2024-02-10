const button = document.getElementById("btn")

button.addEventListener("click", e => console.log("Butona tıkladın."))

const name = document.getElementById("name")
name.addEventListener("input", e => console.log("Bir şeyler yazılıyor", e.target.value))