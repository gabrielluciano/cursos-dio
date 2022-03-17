const assert = require("assert");
const Math = require("../src/math.js");
const expect = require("chai").expect;
const sinon = require("sinon");

let value = 0;

describe("Math class", function () {
  // Validação de método síncrono
  it("Sum two numbers", function () {
    value = 5;
    const math = new Math();

    // assert.equal(math.sum(value, 5), 10);
    expect(math.sum(value, 5)).to.equal(10);
  });

  // Validação de método assíncrono
  // Preciso usar function no segundo parâmetro pois, caso utilize
  // arrow function o this não estará definido
  it("Multiply two numbers", function (done) {
    const math = new Math();
    this.timeout(3000); // Alterando o timeout

    math.multiply(value, 5, (value) => {
      // assert.equal(value, 0);
      expect(value).to.equal(0);
      done();
    });
  });

  // Este teste ficará como pendente
  it("Subtract two numbers");

  // Posso fazer o mocha executar apenas um teste usando o only
  // it.only(name, function)
  it("Divide two numbers", function () {
    const math = new Math();
    const obj = {
      name: "Gabriel Luciano",
    };

    const obj2 = {
      name: "Gabriel Luciano",
    };

    // assert.equal(math.divide(10, 2), 5);
    // expect(math.divide(10, 2)).to.equal(5);

    // Validando objetos
    // expect(obj).to.have.property("name").equal("Gabriel Luciano");
    // expect(obj).to.have.property("age"); // Error

    // expect(obj).to.equal(obj2); // Error, mesmo que sejam iguais
    expect(obj).to.deep.equal(obj2);
  });

  // Para ignorar o teste utiliza-se o skip
  // it.skip

  // Hooks - formas de se executar código evitando repetição
  beforeEach(function () {
    value = 0;
  });
  // outros hooks
  // before, after, afterEach

  // Cria uma função "espiã" que verifica se o método load foi chamado
  // Através do valor mocado criado
  it("Calls req with sum and index values", function () {
    const req = {};
    const res = {
      load: sinon.spy()
    };
    const math = new Math();

    math.printSum(req, res, 5, 5);

    // expect(res.load.calledOnce).to.be.true;
    // expect(res.load.args[0][0]).to.equals("index");
    expect(res.load.args[0][1]).to.equals(10);
  });
});

// O assert do node é limitado e pouco descritivo
// Ao invés do assert pode-se utilizar a chai
// Chai é uma lib específica para asserts
