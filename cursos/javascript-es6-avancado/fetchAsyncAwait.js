// Api do browser para requsicoes http
// Nao presente no NodeJS
// O catch só será acionado em erros de rede
fetch("/data.json")
  .then((resp) => {
    console.log(resp.status);
    return resp.json();
  })
  .then(console.log)
  .catch((error) => console.log(error));

// O catch só será acionado em erros de rede. Ex.: porta inexistente
/*
fetch("http://127.0.0.1:5501/data.json")
  .then((resp) => resp.json())
  .then(console.log)
  .catch((error) => console.log(error));

fetch("dataOLA.json")
  .then((resp) => resp.json())
  .then(console.log)
  .catch((error) => console.log(error));
*/

// Fetch com async/await - Funcionalidade do ES7
// Nesse caso o tratamento de erro é feito com try catch
async function fetchData() {
  try {
    const resp = await fetch("/data.json");
    const data = await resp.json();
    
    console.log(data.name);
    return data;
  } catch(error) {
    console.log(error);
  }
}

// O retorno da função fetch data também é uma promise
fetchData()
  .then(data => {
    data.job = "developer"
    return data;
  })
  .then(console.log);
