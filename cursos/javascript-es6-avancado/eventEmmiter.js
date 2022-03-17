// EventEmitter é exclusivo do node

const EventEmitter = require("events");

const emitter = new EventEmitter();

// Criamos o evento user logged
emitter.on("User logged", (data) => {
  console.log(data);
});

// Emite o evento user logged
// Assim, a callback passada no método on será executada
emitter.emit("User logged", { user: "Gabriel Luciano" });

// O funcionamento é similar ao eventListener do browser
// Trata-se do padrão de projeto Observer

// Método once

// Cadastro do evento. Neste caso apenas o primeiro emit será executado
emitter.once("User logged out", (data) => {
  console.log(data);
});

// Emissão do evento (Timeout para simular código assíncrono)
setTimeout(() => {
  emitter.emit("User logged out", { user: "Jack Black" });
  emitter.emit("User logged out", { user: "Gabriel Luciano" });  // Não será executado
}, 2000);

// No browser existe o Event Target