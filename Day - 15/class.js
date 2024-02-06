class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.gender = "Kadın"
  }
  get getGender() {
    return this.gender
  }
  set setAge(age) {
    this.age = age
  }
  setAgeChange(age) {
    this.age = age
  }
}

const person = new Person("Şeyma", 22)
console.log(person) 

const person2 = new Person("Hatice", 38)
console.log(person2) 

console.log(person.getGender)

person.setAge = 23 //Kullanım eşitleme şeklinde olmalı setAge(23) olmuyor
console.log(person.age)

person.setAgeChange(23)
console.log(person.age)