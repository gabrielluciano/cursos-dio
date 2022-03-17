// Com callback
function withCallback(callback) {
  setTimeout(() => {
    callback("Some Data");
  }, 1000);
}

// withCallback((resp) => console.log(resp));

// Com promise
function withPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Other Data");
    }, 1500);
  });
}

// withPromise().then((resp) => console.log(resp));

// Outro exemplo

/////////// Calback
function doSomethingCallback(callback) {
  setTimeout(() => {
    // did something
    callback("First data");
  }, 1000);
}

function doOtherThingCallback(callback) {
  setTimeout(() => {
    // did something
    callback("Second data");
  }, 1000);
}

// Callback hell
function doAllCallback() {
  try {
    doSomethingCallback((data) => {
      var processedData = data.split("");

      try {
        doOtherThingCallback((data) => {
          var processedData2 = data.split("");

          try {
            setTimeout(() => {
              console.log(processedData, processedData2);
            }, 1000);
          } catch (err) {
            // handle error
          }
        });
      } catch (err) {
        // handle error
      }
    });
  } catch (err) {
    // handle error
  }
}

// doAllCallback();

/////////// Promise

function doSomething() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // did something
      resolve("First Data");
    }, 1000);
  });
}

function doOtherThing() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // did other thing
      resolve("Second Data");
    }, 1000);
  });
}

// Uma promise pode ter três status:
// - Pending: em execução
// - Fulfilled: terminou de executar e deu resolve
// - Rejected: caso aconteça um erro

doSomething()
  .then((data) => {
    console.log(data.split(""));
    return doOtherThing();
  })
  .then((data2) => {
    console.log(data2.split(""));
  })
  .catch((error) => console.log(error));

// Execução em paralelo
Promise.all([doSomething(), doOtherThing()])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

// Corrida de promise
// Promise.race a que resolver primeiro será executada

Promise.race([doSomething(), doOtherThing()])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
