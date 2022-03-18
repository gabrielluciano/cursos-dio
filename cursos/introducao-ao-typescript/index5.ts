// Omit
interface Pessoa {
  nome: string;
  idade: number;
  nacionalidade: string;
}

// Omitir o parâmetro nacionalidade
interface Brasileiro extends Omit<Pessoa, "nacionalidade"> {}

const brasileiro: Brasileiro = {
  nome: "José",
  idade: 38,
  // nacionalidade: "brasileiro" // error
};

// Outros tipos
// - Required
// - Pick
// - ReadOnly
// - NonNullable
// - Extract
// entre outros...