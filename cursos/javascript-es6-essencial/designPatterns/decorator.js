// Decorators são funções que estendem o funcionamento de outras funções adicionando passos adicionais, sem modificar a função original

let loggedIn = false;

// Decorator para executar a função passada como parâmetro apenas se o usuário estiver logado
function callIfAuthenticated(fn) {
  return loggedIn && fn();
}

function sum(a, b) {
  return a + b;
}

console.log(callIfAuthenticated(() => sum(1, 2)));
loggedIn = true;
console.log(callIfAuthenticated(() => sum(1, 2)));
loggedIn = false;
console.log(callIfAuthenticated(() => sum(1, 2)));