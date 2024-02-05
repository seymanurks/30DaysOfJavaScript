try {
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
}