const users = ["Gabriel", "Pedro", "Jennifer"];

// Similar a implementação de um ENUM em C
const gender = {
  MAN: Symbol("M"),
  WOMAN: Symbol("W"),
};

const persons = [
  {
    name: "Gabriel",
    age: 24,
    gender: gender.MAN,
  },
  {
    name: "Pedro",
    age: 43,
    gender: gender.MAN,
  },
  {
    name: "Jennifer",
    age: 18,
    gender: gender.WOMAN,
  },
];

console.log(persons.length); // Comprimento
console.log(Array.isArray(persons)); // Checando se é um array
persons.forEach((person, index, arr) =>
  console.log(`Nome: ${person.name}`, index, arr)
); // Iterando

const mens = persons.filter((person) => person.gender === gender.MAN); // Retorna o elemento se o retorno da callback for true
console.log(mens);

// Aplica uma transformação em cada elemento retornando um novo array
const personsWithCourse = persons.map((person) => {
  person.course = "JS ES6 essencial";
  return person;
});
console.log(personsWithCourse);

// Reduce - Transforma um array em outro tipo
const totalAge = persons.reduce((sum, person) => (sum += person.age), 0);
console.log(totalAge);

const totalEvenAges = persons
  .filter((person) => person.age % 2 === 0)
  .reduce((sum, person) => (sum += person.age), 0);

console.log(totalEvenAges);

// Outras formas de criar um Array
const people = Array.of("John", "Cris", "Jenny");
console.log(people);

const notNumbers = Array(3);
console.log(notNumbers);

const numbers = Array(3, 2);
console.log(numbers);

// Array.from usado para NodeLists - exemplo: document.querySelector("div")

// Outros métodos de array

console.log(people.pop()); // Remove o último elemento do array e retorna o elemento removido
console.log(people);

console.log(people.unshift("Jenny")); // Adiciona no início do array e retorna o tamanho do array
console.log(people);

console.log(people.shift()); // Remove o primeiro elemento do array e retorna o elemento removido
console.log(people);