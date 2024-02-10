for (let i = 1; i <= 10; i++) {
    let h1 = document.createElement("h1")

    h1.className = "baslik-1"
    h1.style.color = "white"
    h1.style.backgroundColor = "blue"
    h1.textContent = "JavaScript ile eklenen h1 etiketi " + i
    
    document.body.appendChild(h1)
    
}

const h1Elements = document.querySelectorAll("h1")

/*for (const h1 of h1Elements) {
    //document.body.removeChild(h1)
    h1.remove()
}*/

document.body.innerHTML = " "