console.log("30 Days of JavaScript")

console.log("Benim adım %s ve %d yaşındayım.", "Şeyma", 22)

console.log("%cDUR!", "font-size: 30px; color: red")

console.warn("Uyarı")

console.error("Hata")

let a = 5, b = 6
console.assert(a > b, "a b'den büyük değil")

let names = ["Ebrar", "Şeyma", "Merve"]
console.table(names)

const users = [
    {
      name: 'Şeyma',
      title: 'Programmer',
      age: 22
    },
    {
      name: 'Sinem',
      title: 'Teacher',
      age: 25
    },
    {
      name: 'Abdullah',
      title: 'Developer',
      age: 25
    }
]
  console.table(users)


  console.time("calculate 1 m array")
  new Array(10e5).fill().map((value, index) => index)
  console.timeEnd("calculate 1 m array")  //yaklaşık olarak 0.01 s

  const test = () => {
    console.count("test metodu çağırıldı")
  }
  test()
  test()
  test()

  //console.clear()