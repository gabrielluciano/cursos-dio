const Person = require("./module-1.js");

const pessoa = new Person("Bia");

console.log(pessoa);
pessoa.setName("Bruna");
console.log(pessoa.getName());