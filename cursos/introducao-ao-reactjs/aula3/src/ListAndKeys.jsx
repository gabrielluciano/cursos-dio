import React from "react";

const customers = [
  {
    id: 1,
    name: "Gabriel Luciano",
    skills: ["React", "Node", "TypeScript"],
  },
  {
    id: 2,
    name: "Joana Moura",
    skills: ["PHP", "jQuery", "Laravel"],
  },
  {
    id: 3,
    name: "Lex Luthor",
    skills: ["Haskell", "Assembly", "Java"],
  },
];

const ListsAndKeys = () => {
  const renderCustomers = (customer) => {
    return (
      <div key={`customer-${customer.id}`}>
        <li>{customer.name}</li>
        {customer.skills.map(renderSkills)}
      </div>
    );
  };

  const renderSkills = (skill, index) => {
    return (
      <div key={`skill-${index}`} style={{ paddingLeft: "30px" }}>
        <li>{skill}</li>
      </div>
    );
  };

  return <ul>{customers.map(renderCustomers)}</ul>;
};

export default ListsAndKeys;
