class Math {
  sum(a, b) {
    return a + b;
  }

  multiply(a, b, callback) {
    setTimeout(() => {
      callback(a * b);
      // Caso o tempo seja maior que 2000 o mocha gera um erro
      // O timeout pode ser especificado por this.timeout dentro
      // da função it
    }, 2500); 
  }

  divide(a, b) {
    return a / b;
  }

  printSum(req, res, a, b) {
    res.load("index", a + b);
  }
}

module.exports = Math