import React from "react";

import ListsAndKeys from "../ListAndKeys";
import HandlingEvents from "../HandlingEvents";
import Button from "../components/Button";

const buttonA = <button>Histórico dos Clientes</button>;
const buttonB = <button>Cadastrar Cliente</button>;

const hasCustomer = true;

const client = {
  name: "Fulano",
  id: 5,
};

const App = () => {
  const renderShowHistory = (
    <div>
      Clique no botão abaixo para visualizar o histórico dos clientes
      <br />
      {buttonA}
    </div>
  );

  const renderAddCustomer = (
    <div>
      Clique abaixo para cadastrar os clientes
      {buttonB}
    </div>
  );

  const customer = "Gabriel Luciano";

  const showCustomer = () => {
    if (!hasCustomer) return null;

    return (
      <div>
        <h1>Nome do Cliente: {customer}</h1>
      </div>
    );
  };

  const handleClick = (e, id) => {
    console.log("Deletar cliente de id" + id);
    console.log(e);
  };

  return (
    <div>
      Valor da variável hasCustomer: {String(hasCustomer)}
      {hasCustomer ? renderShowHistory : renderAddCustomer}
      <div>{showCustomer()}</div>
      <ListsAndKeys />
      <HandlingEvents />
      <Button onClick={(e) => handleClick(e, client.id)}>Deletar o Cliente</Button>
    </div>
  );
};

export default App;
