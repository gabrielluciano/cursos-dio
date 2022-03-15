/**
 * Var - mutável, não tem escopo de bloco, mas tem escopo de função
 * Let - mutável e tem escopo de bloco e função
 * Const - imutável e tem escopo de bloco e função
 */

{
  {
    {
      {
        var text = "Hello";
        let text2 = "Hello2";
        const text3 = "Hello3";
      }

      // console.log(text2); // ReferenceError
      // console.log(text3); // ReferenceError
    }
  }
}

console.log(text);
// console.log(text2); // ReferenceError
// console.log(text3); // ReferenceError


function fn() {
  var text4 = "Hello4";
  let text5 = "Hello5";
  const text6 = "Hello6";
}

// console.log(text4); // ReferenceError
// console.log(text2); // ReferenceError
// console.log(text3); // ReferenceError
