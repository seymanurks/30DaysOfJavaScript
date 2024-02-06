class Person {
  constructor(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
  }
  get getGender() {
    return this.gender == 1 ? "Erkek" : "Kadın"
  }
  set setAge(age) {
    this.age = age
  }
  setAgeChange(age) {
    this.age = age
  }
  static skills() {
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
    return skills
  }
}

const person = new Person("Şeyma", 22, 2)
console.log(person) 

const person2 = new Person("Hatice", 38, 2)
console.log(person2) 

console.log(person.getGender)

person.setAge = 23 //Kullanım eşitleme şeklinde olmalı setAge(23) olmuyor
console.log(person.age)

person.setAgeChange(23)
console.log(person.age)

console.log(Person.skills())

class Student extends Person {

  constructor(name, age, gender, grade) {
    super(name, age, gender)
    this.grade = grade
  }
  learn() {
    return "Dersi dinliyor"
  }
}

const student = new Student("Nisa", 17, 2, 11)
console.log(student.learn())

console.log(student.age)
console.log(student.grade)