function soma(a: number, b: number) {
  return a + b;
}

// soma("a", "b"); // Error

// types
// interfaces

// Interfaces geralmente são usadas para definir contratos, como
// contratos de estrutura de dados, classes etc...
interface IAnimal {
  nome: string;
  tipo: "terrestre" | "aquático";
  domestico: boolean;
  executarSom(som: string): void;
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}

const animal: IAnimal = {
  nome: "Elefante",
  tipo: "terrestre",
  domestico: false,
  executarSom(som) {
    console.log(som);
  },
};

const felino: IFelino = {
  nome: "Leão",
  tipo: "terrestre",
  domestico: false,
  visaoNoturna: true,
  executarSom(som) {
    console.log(som);
  },
};

console.log(animal);
animal.executarSom("turuuuuuu!");
felino.executarSom("Rrrghhh!");

// Types normalmente são usados para juntar interfaces ou definir se uma
// variável pode ser de uma ou outra interface
interface ICanino extends IAnimal {
  porte: "pequeno" | "medio" | "grande";
}

type IDomestico = IFelino | ICanino;
// type IDomestico = IFelino & ICanino;

const gato: IDomestico = {
  domestico: true,
  nome: "gato",
  tipo: "terrestre",
  executarSom(som) {
    console.log(som);
  },
  // visaoNoturna: true,
  porte: "pequeno",
};