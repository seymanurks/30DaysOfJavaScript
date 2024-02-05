let names = ["Şeyma", "Ayça", "Beyza"]
let namesSet = new Set(names);
//console.log(namesSet)

/*for (const name of namesSet) {
    console.log(name)
}*/

//namesSet.forEach(name => console.log(name))


[...namesSet].map(name => console.log(name)); //noktalı virgül koymazsan hata veriyor
//Array.from(namesSet).map(name => console.log(name))

namesSet.add("Ceyda")
namesSet.add("Ceyda") //terkar eklemez değişkenler unique olarak tanımlanır
namesSet.delete("Ayça")
console.log(namesSet)
console.log(namesSet.size)

console.log(namesSet.has("Şeyma")) //kontrol etme 

namesSet.clear()
console.log(namesSet)

