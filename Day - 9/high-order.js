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

  const numbers = [1, 3, 5, 7, 9]
  let sum = 0
  let calculate = number => sum += number
  numbers.forEach(calculate)
  console.log(sum)