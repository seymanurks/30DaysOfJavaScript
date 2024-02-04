function sayHello() {
    console.log('Hello')
  }
  const interval = setInterval(sayHello, 1000) // saniyede 1 Hello yazdırır, 1000ms = 1s

  function sayHello() {
    console.log('Hello')
  }
  //setTimeout(sayHello, 2000) //2 saniye bekledikten sonra "Hello" yazdıracak


  const clearInterval = setTimeout(() => {
    clearInterval(interval) 
    console.log("tekrarlama işlemi iptal edildi")
  }, 5000) 

  setTimeout(() => {
        clearTimeout(clearInterval)
        console.log("durdurma işlemi iptal edildi, tekrarlama işlemi aktif ")
  }, 3000)
