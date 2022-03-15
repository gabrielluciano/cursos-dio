// O hoisting de funções faz com que todas as declarações sejam movidas para o início do bloco.

function fn() {
  log('Hoisting de função');

  function log(value) {
    console.log(value);
  }
}

fn();

// O código abaixo é, portanto, equivalente ao código acima
// Entretanto, o código abaixo é uma boa prática
/**
 * 
function fn() {
  function log(value) {
    console.log(value);
  }

  log('Hoisting de função');
}
 */