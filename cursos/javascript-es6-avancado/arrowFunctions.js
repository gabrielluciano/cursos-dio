// Na definição da função falar, o this se refere ao objeto
let pessoa = {
  frase: "Olá!",
  falar: function () {
    console.log(this.frase);
  },
};

// Funciona corretamente pois o this está no contexto do objeto que contém o atributo falar
pessoa.falar();

// Neste caso, ao passar a função falar para outra variável o this irá se referir ao contexto global
let falar = pessoa.falar;
falar(); // Nesta chamada this se refere ao objeto global

// Resolvendo com bind
falar = pessoa.falar.bind(pessoa);
falar(); // Neste caso o this foi fixado ao objeto pessoa e portanto funcionará corretamente

console.log(); // Pulando linha

// Outro exemplo
let obj = {
  data: "some data",
  logData: function() {
    setTimeout(function() {
      console.log(this.data);
    }, 1000);
  }
}

// Nesse caso this.data será undefined pois o this vai se referir ao objeto global
// Isto ocorre devido ao uso da função setTimeout que é executada no contexto global
obj.logData();

// Resolvendo o problema com o bind
// Nesse caso fixamos o this da callback ao objeto em questção
obj = {
  data: "some data",
  logData: function() {
    setTimeout(function() {
      console.log(this.data);
    }.bind(this), 2000);
  }
}

obj.logData(); // Funciona corretamente

// Ao invés de usarmos function podemos usar arrow function para resolver este problema
// As arrows functions conseguem "se lembrar" do contexto onde foram criadas, apontando
// sempre para o mesmo local de criação
obj = {
  data: "some data",
  logData: function() {
    setTimeout(() => console.log(this.data)
    , 3000);
  }
}

obj.logData(); // Funciona corretamente, mesmo sem o bind
