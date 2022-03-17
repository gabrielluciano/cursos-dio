// Implementação de uma função para somar um número indeterminado de parâmetros

// Maneira antiga
function sumOld() {
  const values = Object.values(arguments);
  return values.reduce((sum, value) => sum + value, 0);
}

console.log(sumOld(5, 5, 5, 2, 3));

// Com Rest Operator
// Rest operator: junta os parâmetros passados em um array
function sum(...values) {
  return values.reduce((sum, value) => sum + value, 0);
}

console.log(sum(5, 5, 5, 2, 4));

// Obs.: Arrow functions não possui arguments no navegador
// No node não gera erro, mas retorna o arguments do escopo que encapsula a arrow function
const test = () => {
  console.log(arguments);
};

test(1, 2, 3);

// Mesclando rest e parâmetros
function multiplyOld(a, b, ...args) {
  return a * b * args.reduce((acc, value) => acc * value, 1);
}

console.log(multiplyOld(1, 2, 5, 8));

// Função que passa os parâmetros para multiply

function multiply(...args) {
  return args.reduce((acc, value) => acc * value, 1);
}

// Forma antiga
function handleMultiplyOld(...rest) {
  return multiply.apply(undefined, rest);
}

console.log(handleMultiplyOld(1, 2, 4, 5));

// Forma nova Usando Spread Operator
function handleMultiply(...rest) {
  // Aqui estou junto os parâmetros em um array chamado rest
  return multiply(...rest); // Aqui estou espalhando os parâmetros do array rest [1, 2, 3, 4] => 1, 2, 3, 4
}

console.log(handleMultiply(1, 2, 4, 10));

// Diferente do Rest, o Spread operator pode ser usado em strings, arrays, objetos literais e objetos iteráveis
function logArgs(...args) {
  console.log(args);
}

// Strings
const str = "Digital Innovation One";
logArgs(...str);

// Arrays
const arr = [1, 2, 3, "texto"];
logArgs(...arr);

// Construindo arrays
// const arr2 = arr.concat([5, 6, 7]);  // Forma antiga
const arr2 = [...arr, 4, 5, 6];
logArgs(...arr2);

// Clonando arrays
const arrClone = [...arr];
logArgs(...arrClone);

// Objetos literais
let obj = {
  test: 123,
};

const obj2 = {
  ...obj,
  test2: 456,
};

console.log(obj2);

// Isto não pode ser feito - Objetos literais são não iteraveis
// const arr3 = [...obj]

// A ordem das chaves é importante, posso sobrescrever uma propriedade com o Spread ou uma propriedade do Spread
const obj3 = {
  ...obj,
  test: 456,
};

const obj4 = {
  test: 456,
  ...obj,
};

console.log(obj);
console.log(obj3);
console.log(obj4);

// Clonando objetos
// const obj5 = obj; // Isso não é um clone e sim uma passagem por referência

const obj5 = {...obj};
obj5.newAttrib = "test";

console.log(obj5);
console.log(obj);

// Este tipo de clone é chamado de Shallow Clone, pois não clona objetos aninhados. Estes continuarão
// apontando para o objeto original. Exemplo:
obj = {
  test: 123,
  nested: {
    prop: "text"
  }
}

const obj6 = {...obj}
obj6.nested.prop = "modified text" // Modifica a propriedade de obj também

console.log(obj);
