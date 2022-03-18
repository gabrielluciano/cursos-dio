// Nesse caso não posso usar input: HTMLInputElement
// pois o getElementById pode não retornar um HTMLInputElement
// Usando o "as" digo que o retorno da função será um HTMLInputElement
const input = document.getElementById("input") as HTMLInputElement;

input.addEventListener("input", (event) => {
  const i = event.currentTarget as HTMLInputElement;
  console.log(i.value);
});

// Generics types

function substituiTudo<T>(array: T[], valor: T): T[] {
  return array.map(() => valor);
}

substituiTudo(["A", "B", "C"], "D");

//
interface IUsuario {
  id: string;
  email: string;
  cargo?: "funcionario" | "gerente" | "coordenador" | "supervisor";
}

function redirecione(usuario: IUsuario) {
  if (usuario.cargo) {
    // redirecionar(usuario.cargo);
  }

  // redirecionar para a área do usuário
}