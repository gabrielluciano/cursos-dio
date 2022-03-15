console.log('a =', a)
var a = 2
console.log('a =', a)

/** Resumo: Hosting is JavaScript's default behavior of moving declarations to the top
 * O içamento (hoisting) é um movimento que ocorre com a 
 * declaração de uma variavel do tipo VAR. Mesmo ela sendo 
 * declarada na linha 2 a sua DECLARAÇÃO vai ser feita no início
 * do escopo em que foi criada. Observe que a atribuição vai
 * continuar na linha 2. O código abaixo teria o mesmo efeito:
 * 
 * var a
 * console.log('a =', a)
 * a = 2
 * console.log('a =', a)
 * 
 * O mesmo ocorre em outros escopos como funções. Logo, não
 * tem motivos para fazermos isso, temos que declarar as variáveis
 * sempre no início
 */

// Vai dar erro pois hoisting só ocorre com VAR
console.log('b =', b)
let b = 2
console.log('b =', b)