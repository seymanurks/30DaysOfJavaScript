const person = {
    firstName: 'Seyma Nur',
    lastName: 'K.',
    age: 22,
    country: 'Turkiye',
    skills: [
      'HTML',
      'CSS',
      'Java',
      'JavaScript',
      'Swift',
      'React Native',
    ],
    'phone number': '555 666 77 88',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
      }
  }

  let bilinenDiller = 'skills'

  console.log(person.firstName)
  console.log(person['phone number'])

  console.log (person[bilinenDiller])

  console.log(person.fullName())


