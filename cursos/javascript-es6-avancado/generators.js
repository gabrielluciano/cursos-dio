// Generators são funções que podem ser pausadas!!
function* hello() {
  console.log("Hello");
  yield 1; // Para aqui e espera o next. Valor 1 será retornado no value
  
  console.log("From");
  // Valor 2 será retornado na chave value do objeto retornado por it.next()
  // o retorno de yield é o parâmetro passado para a função it.next()
  const outsideValue = yield 2;

  console.log(outsideValue);
}

const it = hello();

console.log(it.next()); // Hello
console.log(it.next()); // From
console.log(it.next("Outside!")); // Function

// Ranges infinitos
function* naturalNumbers() {
  let number = 0;
  while(true) {
    yield number;
    number++;
  }
}

const it2 = naturalNumbers();

console.log(it2.next().value);
console.log(it2.next().value);
console.log(it2.next().value);
console.log(it2.next().value);
console.log(it2.next().value);
console.log(it2.next().value);

// Usando generator para criar um Iterator Object
const obj = {
  values: [1, 2, 3],
  *[Symbol.iterator]() {
    for (let i = 0; i < this.values.length; i++) {
      yield this.values[i];
    }
  }
}

const it3 = obj[Symbol.iterator]()
console.log(it3.next());
console.log(it3.next());
console.log(it3.next());
console.log(it3.next());

for(let value of obj) {
  console.log(value);
}

// Algumas bibliotecas que lidam com coisas assíncronas podem utilizar generators