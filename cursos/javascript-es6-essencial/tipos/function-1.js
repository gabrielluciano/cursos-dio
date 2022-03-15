function fn() {
  console.log("Executou!");
  return "Code here";
}

const arrowFn = () => "Code here";
const arrowFn2 = () => {
  return "Code here";
}

// Funções são objetos
fn.prop = "Posso criar propriedades";
console.log(fn.prop);

// Receber e retornar funções
const controlFnExec = fnParam => allowed => {
  if (allowed) fnParam();
}

// Implementação sem arrow function - Mais legível!
// function controlFnExec2(fnParam) {
//   return function(allowed) {
//     if (allowed) fnParam;
//   }
// }

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true);  // Vai executar
handleFnExecution(false); // Não vai executar