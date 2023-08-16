/* Operadores lógicos servem para adicionar demais comparações à demais itens.
    && = E(AND) : Retorna True se todas as expressões forem verdadeiras.
    || = OU(OR) : Retorna True se uma das expressões for verdadeira.
    ! = (NOT) : Retorna True caso uma expressão seja Falsa.(Verifica se a expressão retorna o valor False.)
*/


/*  Utilizando &&(AND)  */
console.log(100 > 90 && 100 < 99) // Retorna False, já que apenas uma das expressões retorna True.

console.log(100 > 50 && 50 > 10) // Retorna True, porque ambas as expressões retorna True.


/*  Utilizando ||(OR)  */
console.log(100 > 90 || 100 < 99) // Vai retorna True, já que uma das expressões retorna verdadeiro.

console.log(80 < 70 || 70 < 50) // Vai retorna o valor False, já que ambas as expressões retorna o valor False.


/*  Utilizando !(NOT)  */
console.log(!100 > 90) // Retorna False, já que a expressão não ira retorna o valor False.

console.log(!100 < 90) // Retorna True, porque a expressão vai retorna False.


/* Para deixar mais simples de ler a expressão com operador lógico NOT, coloque a expressão entre parênteses. */
console.log(!(100 > 10)) // Retorna False, já que a expressão vai retorna True.
