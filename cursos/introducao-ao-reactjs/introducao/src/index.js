import React from "react";
import ReactDOM from "react-dom";

import Button from "./Button";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ClassComponent from "./ClassComponent";

import "./style.css";

const sum = (a, b) => a + b;

function primeiroJSX() {
  return <div className="test">Gabriel Luciano</div>;
}

const App = () => {
  return (
    <React.StrictMode>
      <div className="App">
        <h1>Hello React</h1>
        <h2>Soma: {sum(10, 20)}</h2>

        {primeiroJSX()}

        <hr />
        <Button onClick={() => alert("Clicou!")} name="Botão Personalizado" />

        <ComponentA>
          <ComponentB />
          <ComponentB />
          <ComponentB />
        </ComponentA>
        <hr />

        <ClassComponent />
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
