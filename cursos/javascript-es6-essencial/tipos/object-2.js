const user = {
  name: "Gabriel",
  lastName: "Luciano de Souza",
};

// Retorna um array com as chaves
console.log(Object.keys(user));

// Retorna um array com os valores
console.log(Object.values(user));

// Uma matriz onde a primeira coluna contém as chaves e a segunda coluna contém os valores
// Cada linha representa um atributo diferente
const entries = Object.entries(user);
console.log(entries);
console.log(entries[0][0] + " : " + entries[0][1]);
console.log(entries[1][0] + " : " + entries[1][1]);

// Adiciona novo atributo ao objeto - Muda o objeto
Object.assign(user, { fullName: "Gabriel Luciano de Souza" });
console.log(user);

// Neste caso retorna um novo objeto, sem modificar user
console.log(Object.assign({}, user, { idade: 24 }));
console.log(user);

// Outra forma de criar um novo objeto
console.log({ ...user, idade: 240 });
console.log(user);

// Freeze Congela um objeto
const newObj = { foo: "bar" };
Object.freeze(newObj);

newObj.bar = "foo";
delete newObj.foo;
newObj.foo = "change";

console.log(newObj);

// Seal - permite apenas que as propriedades existentes sejam alteradas
const person = { name: "Gabriel" };
Object.seal(person);

person.lastName = "Luciano de Souza"; // Não permitido
delete person.name; // Não permitido
console.log(person);

person.name = "João"; // Permitido
console.log(person);