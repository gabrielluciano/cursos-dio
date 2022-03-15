// Função factory
function User(name, idade, customProperties) {
  return {
    name: name,
    idade: idade,
    lastName: "Sobrenome",
    ...customProperties
  };
}

const user = User("Jonh", 29, { height: 1.85 });
console.log(user);
