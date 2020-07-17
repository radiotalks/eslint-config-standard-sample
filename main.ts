import { Person } from './person';

const person = new Person();

person.Name = 'Peter';
person.SecondName = 'Gabriel';

switch (person.Name) {
  case 'Peter':
    console.log(person.FullName);
    break;
  case 'John':
    console.log('Not Peter');
    break;
}
