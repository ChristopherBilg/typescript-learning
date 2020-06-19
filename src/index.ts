interface Person {
  firstName: string,
  lastName: string,
  age: string
}

class Student {
  #person: Person // Private field

  constructor (public person: Person) {
    this.#person = person // Setting a private field
  }

  get greeting () {
    const fn = this.person.firstName // Accessing data from a private field
    const ln = this.person.lastName
    const age = this.person.age
    return `Hello, ${fn} ${ln}. You are ${age} years old.`
  }
}

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}

console.log(new Student(user).greeting)
