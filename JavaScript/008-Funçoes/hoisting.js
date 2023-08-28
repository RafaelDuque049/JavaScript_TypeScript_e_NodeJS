/* HOISTING: 
 O hoisting é o evento de carregar todas as funções Declaration e variáveis do tipo VAR primeiro que as de mais parte do código.
    podendo assim, utilizar a função antes mesmo de declara-lá.
 */


console.log(soma(12, 14)) // A chamada de função funciona por conta do hoisting

function soma(n1, n2){
    return n1 + n2
}


console.log(num) // Vai retornar UNDEFINED, porque ele carrega a existência da variável, mas não seu valor.
var num = 100
console.log(num) // Mas após sua declaração, o seu vaor é definido.
