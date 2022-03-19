import React from "react";

const HandlingEvents = () => {
  const name = "Digital Innovation One";

  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value);
  };

  const showEvent = (e) => {
    console.log("evento clicado");
    alert(name);
  };

  const Button = <button onClick={showEvent}>Mostrar Evento</button>;

  return (
    <div>
      <input type="text" onChange={handleChange} />
      {Button}
    </div>
  );
};

export default HandlingEvents;
