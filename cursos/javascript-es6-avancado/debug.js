setTimeout(() => {
  // debugger; // Pausa o código nessa linka
}, 5000);

// Console

console.warn("Yellow alert text")
console.error("Red error text")

// Trace
console.trace(); // Informações de onde foi executado

// Agrupamento de mensagens
console.group("My group");
console.log("Info inside group");
console.log("More info inside group");
console.groupEnd("My group");

// Log time analisar tempo de execução
console.time("Log time");
setTimeout(() => {
  console.timeEnd("Log time");
}, 2000);

// Console table
console.table(["Gabriel Luciano", "Digital Innovation One"]);
console.log("%c styled log", "color: blue; font-size: 32px;");