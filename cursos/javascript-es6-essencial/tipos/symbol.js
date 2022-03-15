const symbol1 = Symbol();
const symbol2 = Symbol();

// Symbols são únicos
console.log(symbol1 == symbol2);
console.log(symbol1 === symbol2);

// Previnir conflito entre nomes de proprieades
const nameSymbol1 = Symbol("name");
const nameSymbol2 = Symbol("name");

const user = {
  [nameSymbol1]: "Gabriel",
  [nameSymbol2]: "João",
  lastName: "Luciano de Souza",
};

console.log(user);

// Symbols não são enumerables
for (const key in user) {
  console.log(key) // Apenas last name será exibido
}