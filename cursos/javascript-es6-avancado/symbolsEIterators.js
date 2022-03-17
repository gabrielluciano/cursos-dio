// Symbols - são uma forma de gerar um identificador único
// Os identificadores gerados pelo symbol são únicos
// Os parâmetros passados servem apenas para debug

const uniqueId = Symbol("Hello");
const uniqueId2 = Symbol("Hello");

console.log(uniqueId);
console.log(typeof uniqueId);
console.log(uniqueId === uniqueId2);

// Symbols podem ser utilizados para gerar propriedades "privadas"
const obj = {
  [uniqueId]: "Hello",
};

console.log(obj);
// console.log(obj.uniqueId); // não acessa a propriedade

// Chave não é retornada pelo keys
console.log(Object.keys(obj));

// Este método retorna os Symbols, logo não são totalmente privados
console.log(Object.getOwnPropertySymbols(obj));

// Symbol é uma alternativa as propriedades criadas com underline _id

// Well known symbols
// Utilizados para adicionar propriedades especiais aos objetos
const obj2 = {
  [Symbol.iterator]() {},
};

// O Symbol.iterator é que torna um array iterável
// Exemplo: utilizando o iterator do array
const arr = [1, 2, 3, 4];
const it = arr[Symbol.iterator]();

// console.log(it.next()); // Cada vez que next é invocado, um valor do array é trazido
// console.log(it.next()); // Retorna um objeto cuja chave value contém o valor
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// As funções que percorrem arrays tem implementações parecidas com essa
while (true) {
  let { value, done } = it.next();
  if (done) break;
  console.log(value);
}

// For of gera o mesmo resultado da função acima
for (let value of arr) {
  console.log(value);
}

// For of pode também ser usado com string
const str = "text";
for (let value of str) {
  console.log(value);
}

// Entretanto, com um objeto literal isso não é possível
const obj3 = {
  name: "John",
  age: 17,
};

// Error - obj3 is not iterable
// for (let value of obj3) {
//   console.log(value);
// }

// Entretanto, com o Well known symbols posso iterar um objeto
// Neste exemplo os metodos for of e o operador spread serão aplicados em cima do array localizado em values
const obj4 = {
  [Symbol.iterator]() {
    let index = 0;

    return {
      next: () => {
        index++;
        return { value: this.values[index - 1], done: index > this.values.length };
      },
    };
  },
  values: [4, 5, 3, 7],
  name: "John",
  age: 17,
};

const it2 = obj4[Symbol.iterator]();

console.log(it2.next());

// Agora o for of funciona
for (let value of obj4) {
  console.log(value);
}

// E o spread também
console.log(...obj4);