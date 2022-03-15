// Singleton - previne múltiplas instâncias do mesmo objeto
function MyApp() {
  if (!MyApp.instance) {
    MyApp.instance = this;
  }

  return MyApp.instance;
}

// Só consigo instanciar app uma vez
const app = MyApp.call({ name: "Gabriel" });
// Mesmo que eu especifique um contexto diferente, a mesma instância será retornada
const app2 = MyApp.call({ name: "Outro" })

console.log(app);
console.log(app2);