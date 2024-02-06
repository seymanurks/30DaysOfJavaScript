/*try {
  let firstName = "Şeyma"
  let fullName = firstName + " " + lastName
}
catch(err) {
  console.log("Hatalı kullanım")
  console.log(err)
  console.log(err.name)
}
finally {
  console.log('Her durumda çalıştırılacak kod')
}*/

try {
  let firstName = "Şeyma"
  let lastName = "K."
  let fullName = firstName + " " + lastName
  throw "throw ile hata fırlatıldı"
}
catch(err) {
  console.log("Hatalı kullanım")
}
finally {
  console.log('Her durumda çalıştırılacak kod')
}

//prompt() //Kullanıcı girişi için kullanılır 
let age = prompt("Kaç yaşındasın ?")

try {
    if(age >= 18)
    console.log("Yaş uygun")
    else
    throw alert("Siteyi kullanmak için uygun yaşta değilsiniz")
} catch {
  alert("18 yaşından büyük olmalısınız")
}
