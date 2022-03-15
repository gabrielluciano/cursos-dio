/**
 *
 * É uma boa prática criar objetos imutáveis, assim, quando se tem a necessidade
 * de modificar este objeto, cria-se um novo objeto com as modificações necessárias.
 * Exemplo:
 *
 */

const user = {
  name: "Gabriel",
  lastName: "Luciano de Souza",
};

function getUserWithFullName(user) {
  return {
    ...user,
    fullName: `${user.name} ${user.lastName}`
  }
}

const userWithFullName = getUserWithFullName(user);

console.log(user);
console.log(userWithFullName);

/**
 *
 * Abaixo, um exemplo onde a imutabilidade não é respeitada. Nesse
 * caso, como no javascript objetos são passados para as funções por
 * referência, a modificação no parâmetro user, modifica diretamente
 * o objeto user. Nas duas últimas linhas observas que o objeto
 * userWithFullName e user apontam para o MESMO OBJETO.
 *
 */

/**
const user = {
  name: "Gabriel",
  lastName: "Luciano de Souza",
};

function getUserWithFullName(user) {
  user.fullName = `${user.name} ${user.lastName}`;
  return user;
}

const userWithFullName = getUserWithFullName(user);

console.log(user);
console.log(userWithFullName);

userWithFullName.age = 24;
console.log(user);
*/