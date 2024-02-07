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

/*const promise = new Promise((resolve, reject) => {
  //resolve("İşlem başarılı")
  reject("İşlem başarısız")
})

promise.then((data) => {
  console.log(data)
}).catch(err => {
  console.error(err)
})*/

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

/*fetch(API_URL)
.then(res => res.json())
.then(data => console.log(data)) 
.catch(err => console.error(err))*/

async function getPosts() {
  try {
  const response = await fetch(API_URL)
  const data = await response.json()
  console.log(data) 
  } 
  catch(err) {
  console.error(err)
    }
  }

  getPosts()
