// Binários
var arvores = new Array(
  "pau-brasil",
  "loureiro",
  "cedro",
  "carvalho",
  "sicômoro"
);

console.log(0 in arvores); // True
console.log(1 in arvores); // True
console.log(5 in arvores); // False
console.log("cedro" in arvores); // False
// console.log("cedro" in arvores[2]); // Error
console.log("length" in arvores); // True (length é propriedade de arrays)

console.log();
console.log("PI" in Math); // True (length é propriedade de arrays)

var minhaString = new String("coral");
console.log("length" in minhaString);
console.log("or" in minhaString);

console.log();
var carro = { marca: "Peugeot", modelo: "208", ano: 2007};
console.log("marca" in carro);

// Instance Of
objeto instanceof tipoObjeto

var dia = new Date();
console.log(dia instanceof Date); // True