// As duas interfaces serão "somadas"
interface Estudante {
  nome: string;
  idade: number;
}

interface Estudante {
  serie: string;
}

const estudante: Estudante = {
  nome: "João",
  idade: 12,
  serie: "7"
}

import $ from "jquery";

$.fn.extend({
  novaFuncao() {
    console.log("Chamou nova funcao");
    
  }
})

$("body").novaFuncao();