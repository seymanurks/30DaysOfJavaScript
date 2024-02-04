// callback fonksiyonun adını istediğimiz şekilde verebiliriz.
const callback = (n) => n ** 2

  // bir başka fonksiyonu callback olarak alan fonksiyon
  let cube = (callback, n) => callback(n) * n

  console.log(cube(callback, 3)) 

  const a = s1 => {
        const b = s2 => {
            const c = s3 => {
                return s1 + s2 + s3
            }
            return c
        }
    return b
  }

  console.log(a(5)(10)(20))