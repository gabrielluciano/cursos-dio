class Observable {
  constructor() {
    this.observables = [];
  }

  subscribe(fn) {
    this.observables.push(fn);
  }

  notify(data) {
    this.observables.forEach(fn => fn(data))
  }

  unsubscribe(fn) {
    this.observables = this.observables.filter(obs => obs !== fn);
  }
}

const o = new Observable();

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

// Similar ao comportamento do alvo.addEventListener(callbackFn)
o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

// O notify é chamado pelo eventListener sempre que há alguma modificação no alvo relevante ao evento registrado
o.notify("notified 1");

// Similar ao comportamento do alvo.removeEventListener(callbackFn)
o.unsubscribe(logData2);

console.log();
o.notify("notified 2");