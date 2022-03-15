/**
 * Currying (segundo https://rodrigorgs.github.io/): Currying é o processo de transformar uma função que espera vários argumentos em uma função que espera um único argumento e retorna outra função curried
 */


// Exemplo

// Função a ser aplicada o Currying
function produto(a, b) {
  return a * b;
}

console.log(produto(2, 2));
console.log(produto(2, 8));
console.log(produto(2, 4));
console.log();

// Observe que no exemplo acima o parâmetro (2) precisa ser repetido a cada execução
// Dessa forma posso "memorizar" o 2 a partir da técnica de Currying
function produtoCurrying(a) {
  return function (b) {
    return a * b;
  }
}

const dobro = produtoCurrying(2); // A função dobro agora é o retorno da função produto (2) e o parâmetro a agora valerá sempre 2 na função dobro
console.log(dobro(3));
console.log(dobro(10));
console.log(dobro(8));