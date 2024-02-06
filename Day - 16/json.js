let sampleJSON = `[
    {
      "firstName": "Ebru",
      "lastName":"Öztürk",
      "age":22
    },
    {
      "firstName":"Beyza",
      "lastName":"Çimen",
      "age":25
    },
    {
    "firstName":"Nergis",
    "lastName":"Korkut",
    "age":28
    }
  ]`

  let users = JSON.parse(sampleJSON) //objeye çevirme
  console.log(users)

  const usersObject = {
    Ebru: {
        "lastName":"Öztürk",
        "age":22
    }, 
    Beyza: {
      "lastName":"Çimen",
      "age":25
    },
    Nergis: {
    "lastName":"Korkut",
    "age":28
    }
}

let usersJSON =  JSON.stringify(usersObject, undefined, 4)
console.log(usersJSON)