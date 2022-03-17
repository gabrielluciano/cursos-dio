// Maneira antiga
var prop1 = "Digital Innovation One";
function method1() {
  console.log("method1 called");
}

var obj = {
  prop1: prop1,
  method1: method1,
};

console.log(obj.prop1);
obj.method1();

// Maneira nova
obj = {
  prop1,
  method1,
};

console.log(obj.prop1);
obj.method1();

// Métodos da maneira antiga
obj = {
  sum: function(a, b) {
    return a + b;
  }
}

console.log(obj.sum(7, 9));

// Métodos da maneira nova
obj = {
  sum(a, b) {
    return a + b;
  }
}

console.log(obj.sum(7, 8));

// Atribuição da maneira antiga
var propName = "test";

obj = {};
obj[propName + "concat"] = "prop value";
console.log(obj);

// Atribuição da maneira nova
obj = {
  [propName + "concat"]: "prop value"
};
console.log(obj);