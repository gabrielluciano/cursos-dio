/**
 * 
 * O "this" e as arrow functions
 * 
 */

// A arrow function se lembra do this de onde foi criada
// Já o this na function vai se referir ao contexto da execução

/** 
 * Em resumo:
 *    arrowFunction - This referente ao contexto da criação
 *    function - This referente ao contexto da execução
 * 
 * */

(() => {
  this.name = "Gabriel";

  const getNameArrowFn = () => this.name;

  function getName() {
    return this.name;
  }

  const user = {
    name: "Nome no objeto de execução",
    getName,
    getNameArrowFn
  }

  console.log(user.getNameArrowFn());
  console.log(user.getName());
})()