interface Person {
  firstName: string;
  lastName: string;
  age?: number;
}

interface PersonWithMail extends Person {
  email?: string
}

function updatePerson(person: Person, email: string): PersonWithMail {
  let updatedPerson: PersonWithMail = person;
  updatedPerson.email = email;
  return updatedPerson;
}
