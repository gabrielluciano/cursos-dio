interface ICachorro {
  nome: string;
  idade: number;
  parqueFavorito?: string;
}

class MeuCachorro implements ICachorro {
  nome;
  readonly idade;
  private latido = "au au au";

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  getLatido() {
    return this.latido;
  }
}

const cao = new MeuCachorro("Thor", 7);
console.log(cao.idade);
// cao.idade = 2; // Erro
console.log(cao.getLatido());
