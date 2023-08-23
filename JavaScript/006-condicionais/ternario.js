// Operador ternário é uma das váriações das condicionais. 
// Ele se caracteriza por conter um construtor simples, onde retorna um código quando a condição é verdadeira, e outro caso a condição seja falsa.

const VelocidadeCarro = 100
const VelocidadeMax = 80


// Uma das formas de construir o operador ternário.
let exemplo = VelocidadeCarro > VelocidadeMax ? 'Motorista recebeu uma multa.' : 'Motorista não excedeu a velocidade máxima.'


// Segunda forma de construi-lo.(mais facil de ser compreendida)
let infracao = VelocidadeCarro > VelocidadeMax 
    ? 'Motorista recebeu uma multa.' 
    : 'Motorista não excedeu a velocidade máxima.';

console.log(infracao)
