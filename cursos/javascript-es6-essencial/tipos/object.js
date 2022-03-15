let user = {
  name: 'Gabriel',
  "idade": 24,
  "numero do sapato": 41
}

console.log(user.name);
console.log(user.idade);
console.log(user["numero do sapato"]); // Notacao ponto não é possivel aqui

// Nova propriedade
user.peso = 60;
console.log(user);

// Removendo propriedade
delete user["numero do sapato"];

console.log(user);