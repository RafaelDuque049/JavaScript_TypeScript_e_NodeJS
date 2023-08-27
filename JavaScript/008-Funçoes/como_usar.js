/* O que é uma função?

    - Função é um conjunto de código que pode ser chamado a qualquer momento para fazer uma determinada tarefa.
*/

// 1 - Functions declaration | Construtor: function nomeFunção(parametros/argumentos){bloco de código};
function somar(valor1, valor2){
    const soma = valor1 + valor2 

    return soma;
}

console.log(somar(1, 5)) // Output: 6



// 2 - Functions Expression | Construtor: const nomeFunção = function(parametros/argumentos){bloco de código};
const subtrair = function (valor1, valor2){
    const sub = valor1 - valor2

    return sub
}

console.log(subtrair(4, 3))// Output: 1



// 3 - Arrow Functions | Construtor: const nomeFunção = (parametros/argumentos) => {Bloco de código};
const multiplicar = (valor1, valor2) => {
    const mult = valor1 * valor2

    return mult
}

console.log(multiplicar(3, 5)) // Output: 15



// Arrow Functions comprimida(semelhante ao LAMBDA do Python3):
const multipli = (valor1, valor2) => valor1 * valor2

console.log(multipli(3, 5)) // Output: 15
