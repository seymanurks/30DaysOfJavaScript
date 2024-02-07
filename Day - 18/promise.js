/*const test = callback => {
  setTimeout(() => {
    callback("Bir şeyler ters gitti", [])
  }, 3000)
}

const callback = (err, data) => {
  if (err) 
    console.log("Hata oluştu!")
  else
    return console.log("Data", data)
}

test(callback)*/

const promise = new Promise((resolve, reject) => {
  //resolve("İşlem başarılı")
  reject("İşlem başarısız")
})

promise.then((data) => {
  console.log(data)
}).catch(err => {
  console.error(err)
})

