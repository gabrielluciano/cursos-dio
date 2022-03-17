// Forma antiga
var arr = ["Apple", "Banana", "Orange"];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];

console.log(apple, banana, orange);

// Usando Destructuring Assignment
var [apple1, banana1, orange1] = arr;

console.log(apple1, banana1, orange1);

// Destructuring dentro de destructuring
var arr = ["Apple", "Banana", "Orange", ["Tomato"]];
var [apple2, banana2, orange2, [tomato2]] = arr;

console.log(apple2, banana2, orange2, tomato2);

// Obs.: o desctructuring com dois ou mais níveis pode gerar um erro pois
// está se tentando fazer o destructuring de algo que não existe

// var [apple2, banana2, orange2, [tomato2]] = ["Apple", "Banana", "Orange"];;

// No caso de destructuring com apenas um nível, a variável inexistente será apenas undefined
var [apple2, banana2, orange2] = ["Apple", "Banana"];
console.log(orange2);

// Destructuring com objetos
var obj = {
  name: "Celso",
};

var { name } = obj;
console.log(name);

// Destructuring com novo nome
var { name: name2 } = obj;

console.log(name2);
name2 = "Bianca";

console.log(name2);
console.log(obj.name);

// Nested destructuring
obj = {
  name: "Jonh",
  props: {
    age: 26,
  },
};

var {
  name,
  props: { age: age2 },
} = obj;
console.log(name);
console.log(age2);

// Destructuring de arrays dentro de objetos
obj = {
  name: "Bruce",
  props: {
    age: 20,
    favoriteColors: ["blue", "orange", "red"],
  },
};

var {
  props: {
    favoriteColors: [color1, color2, color3],
  },
} = obj; // Difícil de ler

// Como eu faria:
// var [color1, color2, color3] = obj.props.favoriteColors
console.log(color1, color2, color3);

// Destructuring de arrays dentro de objetos
var arr = [{name: "Apple", type: "Fruit"}, "Banana", "Orange"];
const [{ type: tipo }] = arr;

console.log(tipo);

// Desctructuring em funções

// Forma antiga
function sumOld(arr) {
  return arr[0] + arr[1];
}

console.log(sumOld([1, 2]));

// Com destructuring
// Destructuring aceita default values!
function sum([a = 1, b = 2]) { // Outra forma sum([a, b] = [1, 2])
  return a + b;
}

console.log(sum([2, 3]));
console.log(sum([3]));
console.log(sum([,3]));
console.log(sum([]));