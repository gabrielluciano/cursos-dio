// Executar no browser

// Ex. 1 - retorno o proto

function Pessoa(nome) {
  this.nome = nome;
}

const p1 = new Pessoa("Gabriel");
console.log(p1);
console.log(p1.__proto__ === Pessoa.prototype); // No Node isso será falso, mas será true no browser

// Ex. 2 -  não retorna o proto, pois função construtora não tem retorno
function Pessoa(nome) {
  this.nome = nome;

  return {
    nome: "Teste",
  };
}

const p2 = new Pessoa("Gabriel");
console.log(p2);

// Ex. 3 - Herança
function Animal(qtdePatas) {
  this.qtdePatas = qtdePatas;
}

function Cachorro(morde) {
  Animal.call(this, 4);

  this.morde = morde;
}

const pug = new Cachorro(false);
console.log(pug);

// Ex. 4 - Exemplo 3 com classes
class Animal {
  constructor(qtdePatas) {
    this.qtdePatas = qtdePatas;
  }
}

class Cachorro extends Animal {
  constructor(morde) {
    super(4); // Passa o valor 4 para o constructor da classe Pai
    this.morde = morde;
  }
}

const pug2 = new Cachorro(false);
console.log(pug2);

// Ex. 5 - Atributo privado
class Carro {
  #frase = "A marca do carro é: ";

  constructor(marca) {
    this.marca = marca;
  }

  getModelo() {
    return this.#frase + this.marca;
  }

  get frase() {
    return this.#frase;
  }

  set frase(frase) {
    this.#frase = frase;
  }
}

const santana = new Carro("Volkswagen");
console.log(santana.marca);
// console.log(santana.#frase); // Erro
console.log(santana.frase); // Undefined
console.log(santana.getModelo());
santana.frase = "O carro é fabricado pela ";
console.log(santana.frase);
console.log(santana.getModelo());

// Método estático - podem ser chamados diretamente a partir da classe
// sem a necessidade de instanciar a classe;
class Person {

  static race = "Human";

  static walk() {
    console.log("walking...");
  }
}

Person.walk()
console.log(Person.race);