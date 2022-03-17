// O erro: esquecer um argumento

function multiply1(a, b) {
  return a * b;
}

console.log(multiply1(5));

// A solução antiga (que não serve para Zeros)

function multiply2(a, b) {
  a = a || 1;
  b = b || 1;

  return a * b;
}

console.log(multiply2(5));
console.log(multiply2(5, 0)); // Retorna 5 ao invés de 0, pois o zero é falso para o javascript

// A solução antiga que funciona

function multiply3(a, b) {
  if (b !== 0) b = b || 1;
  if (a !== 0) a = a || 1;

  return a * b;
}

console.log(multiply3(5));
console.log(multiply3(5, 0));

// Solução usando argumentos padrão

function multiply4(a = 1, b = 1) {
  return a * b;
}

console.log(multiply4(5));

// Outra forma
function multiply5(a, b = a) {
  return a * b;
}

console.log(multiply5(2, 5));
console.log(multiply5(5)); // Potência de 2

// A ordem é importante, o caso abaixo gera erro
// function multiply(a = b, b) {
//   return a * b;
// }
// console.log(multiply(undefined, 5));

// Lazy evaluation
function randomNumber() {
  console.log("Generating number...");
  return Math.random() * 10;
}

function multiply(a, b = randomNumber()) {
  return a * b;
}

// A função randomNumber é invocada toda vez que multiply é chamada
console.log(multiply(5)); // B assume um valor aleatório
console.log(multiply(5)); // B assume um valor aleatório
console.log(multiply(5)); // B assume um valor aleatório
console.log(multiply(5)); // B assume um valor aleatório